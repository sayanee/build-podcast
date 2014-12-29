var program = require('commander');
var async = require('async');
var clc = require('cli-color');
var fs = require('fs');
var prompt = require('prompt');
var Client = require('ftp');
var getUrls = require('get-urls');
require('shelljs/global');

module.exports = function(config) {

  // bp pub
  program
    .command('pub')
    .description('publish episode')
    .action(function(configFile) {

      async.series([
        function(next) { isOnDesktop(next) },
        function(next) { stopNginx(next) },
        function(next) { normaliseVideo(config, next) },
        function(next) { isEpisodeInfoFilledIn(config, next) },

        function(next) {
          async.parallel([
            function(next) { uploadViaFTP(config, next) },
            function(next) { uploadToYoutube(config, next) },
            function(next) { uploadToVimeo(config, next) }
          ])
        },

        function(next) { copyDemoCodeToRepo(config, next) },
        function(next) { updatePost(config, next) },
        function(next) { checkPostInfo(config, next) }

      ])

    });

}

function isOnDesktop(callback) {
  if (process.cwd().indexOf('Desktop') > -1) {
    callback(null)
  } else {
    console.log(clc.red('ERROR: Execute this script from desktop'));
    return;
  }
}
function stopNginx(callback) {
  console.log(clc.blue('Key in the admin password to stop Nginx server'));

  exec('sudo nginx -s stop')
  console.log('SUCCESS: Stopped Nginx');

  callback(null)
}

function normaliseVideo(config, callback) {

  var inputFile = config.desktopDir + config.video; // original file mp4 format
  var outputFile = config.desktopDir + config.folder + '.mov';

  // input file must be *.mov
  if(exec('mv ' + inputFile + ' ' + outputFile).code !== 0) {
    return;
  } else {
    console.log('SUCCESS: Renamed video from mov to mp4');
  }

  if(exec('norm ' + outputFile).code !== 0) {
    return;
  } else {
    console.log('SUCCESS: Normalised video from mov to mp4');
  }

  callback(null);
}

function isEpisodeInfoFilledIn(config, callback) {
  // open episode.json
  var episodeJson = config.bpDir + 'episode.json';
  if (exec('subl ' + episodeJson).code !== 0) {
    return;
  } else {
    console.log('SUCCESS: Opened episode.json in text editor');
  }

  prompt.start();

  var property = {
    name: 'yesno',
    message: 'Have you updated episode.json with tags and summary? (y/n) ',
    validator: /y[es]*|n[o]?/,
    warning: 'Must respond yes or no'
  };

  prompt.get(property, function (err, result) {
      if (result.yesno === 'y') {
        callback(null);
      } else {
        console.log(clc.red('Fill in tags and summary in episode.json'));
        return;
      }
  })
}

function uploadViaFTP(config, callback) {
  var c = new Client();
  var videoFilepath = config.desktopDir + config.video;
  console.log(videoFilepath);
  console.log(clc.yellow('IN PROGRESS: Uploading video via FTP'));

  c.on('ready', function() {
    c.put(videoFilepath, config.path , function(error) {
      if (error) {
        console.log(clc.red('ERROR: Uploading video via FTP: ' + error));
        return;
      }

      console.log(clc.green('SUCCESS: Video file uploaded via FTP to http://video.build-podcast.com/' + config.video));
      exec('open ' + 'http://video.build-podcast.com/' + config.video);
      c.end();
      callback(null);
    });
  });
  c.connect(config);
}

function uploadToYoutube(config, callback) {
  var youtubeUploadCommand = 'youtube-upload'
    + ' --email=' + config.youtubeEmail
    + ' --password=' + config.youtubePassword
    + ' --title="' + config.title
    + '" --description="' + config.videoDescription
    + '" --category="Tech" '
    + '--keywords="' + config.tags + '" '
    + config.video;
  var youtubeAddToPlaylistCommand = 'youtube-upload'
    + ' --email=' + config.youtubeEmail
    + ' --password=' + config.youtubePassword
    + ' --add-to-playlist=' + config.youtubePlaylist + ' ';
  var youtubeVideoUrl;

  console.log(clc.yellow('IN PROGRESS: Uploading video to Youtube'));

  exec(youtubeUploadCommand, function(code, output) {
    if (code !== 0) {
      console.log(clc.red('ERROR: Uploading video to Youtube'));
      return;
    }

    youtubeVideoUrl = getUrls(output)[2];
    config.youtubeUrl = youtubeVideoUrl;
    console.log( clc.green('SUCCESS: Video file uploaded to Youtube: ' + youtubeVideoUrl ));
    exec('open ' + youtubeVideoUrl);

    console.log(clc.yellow('IN PROGRESS: Adding video to Youtube playlist'));
    youtubeAddToPlaylistCommand += youtubeVideoUrl;

    exec(youtubeAddToPlaylistCommand, function(code, output) {
      if (code !== 0) {
        console.log(clc.red('ERROR: Adding video to Youtube playlist'));
        return;
      }

      console.log(clc.green('SUCCESS: Video file added to Youtube playlist: ' + config.youtubePlaylistURL));
      exec('open ' + config.youtubePlaylistURL);

      callback(null);
    })

  })

}

function uploadToVimeo(config, callback) {
  var filepath = config.bpDir + 'episode.json';

  console.log(clc.yellow('IN PROGRESS: Uploading video to Vimeo'));
  exec('vimeo upload ' + filepath, function(code, output) {
    if (code !== 0) {
      console.log(clc.red('ERROR: Uploading video to Vimeo: '));
      return;
    }

    console.log(clc.green('SUCCESS: Video file added to Vimeo: ' + getUrls(output)[0]));
    callback(null);
  });
}

function copyDemoCodeToRepo(config, callback) {
  var source = config.desktopDir + config.episodeLowercase + '/.';
  var destination = config.repoDir + config.num + '-' + config.episodeLowercase;

  if (exec('cp -R ' + source + ' ' + destination).code !== 0) {
    console.log(clc.red('ERROR: Copy demo files to repo'));
    return;
  }

  console.log(clc.green('SUCCESS: Copied demo files to the repo'));
  callback(null);
}

function updatePost(config, callback) {
  console.log('URPATE POST:');
  console.log(config.video);
  console.log(config.youtubeUrl)

  fs.stat(config.video , function (error, stats) {
    var videoSize = stats.size;

    fs.readFile(config.postFile, 'utf8', function(err, fileContents) {

      if (error) {
        console.log(clc.red('ERROR: Read file to update meta tags: ' + error));
        return;
      }

      fileContents = fileContents.replace(/{{LENGTH}}/g, videoSize);
      fileContents = fileContents.replace(/{{TAGS}}/g, config.tags);
      fileContents = fileContents.replace(/{{DESCRIPTION}}/g, config.summary);
      fileContents = fileContents.replace(/{{YOUTUBEURL}}/g, config.youtubeUrlId);

      fs.writeFile(config.postFile, fileContents, 'utf8', function(error) {
        if (error) {
          console.log(clc.red('ERROR: Write file with meta data:  ' + error));
          return;
        }
        console.log(clc.green('SUCCESS: Info added to the Post.'));
        callback(null);
      });

    });
  });
}

function checkPostInfo(config, callback) {
  exec('open ' + config.postFile)
  exec('open ' + config.app.gitx);

  prompt.start();

  var property = {
    name: 'postCheck',
    message: 'Is the post complete? Have you committed everything? (y/n) ',
    validator: /y[es]*|n[o]?/,
    warning: 'Must respond yes or no'
  };

  prompt.get(property, function (err, result) {

    if (result.postCheck === 'y') {
      exec('open http://github.com/sayanee/build-podcast');
      console.log(clc.blue('Publish Build Podcast:\n'));
      console.log(clc.blue('j shownotes'); // with autojump
      console.log(clc.blue('git add . && git commit -m "episode ' + config.num + ' ' + config.episode + '"');

      console.log(clc.blue('gj\n');
      // alias gj='git push origin master && git status && git checkout gh-pages && git rebase master && git push origin gh-pages && git checkout master && git status'

      console.log(clc.green('It was another great learning ;-) Well done!'));

      callback(null);
    } else {
      console.log(clc.red('ERROR: Edit the post file: ' + config.postFile));
    }
  });
}
