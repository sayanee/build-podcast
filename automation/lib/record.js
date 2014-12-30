var program = require('commander');
var async = require('async');
var clc = require('cli-color');
var fs = require('fs');
var prompt = require('prompt');
require('shelljs/global');

module.exports = function(config) {

  program
    .command('record')
    .description('start recording screencast')
    .action(function() {

      async.series([
        function(next) { isMicConnected(next) },
        function(next) { editStartPage(config, next) },
        function(next) { openStartPage(config, next) },
        function(next) { isEpisodeLogoAdded(next) },
        function(next) { openApps(config, next) }
      ]);

    });

}

function isMicConnected(callback) {
  prompt.start();
  prompt.get({
    name: 'yesno',
    message: 'Have you connected the microphone? (y/n) ',
    validator: /y[es]*|n[o]?/,
    warning: 'Must respond yes or no'
  }, function (error, result) {
    if (error) {
      console.log('ERROR: Checking if Microphone is connected: ' + error);
      return;
    }

    if (result.yesno === 'y') {
      callback(null);
    }
    else {
      console.log(clc.red('Connect your microphone first and then run again: bp record'));
      return;
    }
  });
}

function editStartPage(config, callback) {
  var startFile = config.repoDir + 'start/index.html';

  fs.readFile(startFile, 'utf8', function(error, data) {
    if (error) { console.log(error); }

    data = data.replace(/<h1>(.*)<\/h1>/g, '<h1>' + config.num + ' ' + config.episode + '</h1>');
    data = data.replace(/<h4>(.*)<\/h4>/g, '<h4>' + config.tagline + '</h4>');
    data = data.replace(/<h6>(.*)<\/h6>/g, '<h6>Version: ' + config.version + '</h6>');

    fs.writeFile(startFile, data, 'utf8', function(error) {
      if (error) {
        console.log('ERROR: Write to start file index.html:  ' + error);
        return;
      }
      console.log('SUCCESS: Start file index.html has new episode info');
      callback(null);
    });
  });
}

function openStartPage(config, callback) {
  if (exec('open ' + config.repoDir + 'start').code !== 0) {
    return;
  } else {
    console.log('SUCCESS: Opened start directory');
  }

  if (exec('subl ' + config.repoDir + 'start/index.html').code !== 0) {
    return;
  } else {
    console.log('SUCCESS: Opened start directory in text editor');
  }

  if (exec('sudo nginx').code !== 0) {
    // edit: /etc/hosts to add 127.0.0.1 dev.build-podcast.com
    // edit: nginx config file /usr/local/etc/nginx/nginx.conf
    return;
  }

  exec('open http://dev.build-podcast.com');
  console.log('SUCCESS: Start screen opened at dev.build-podcast.com');
  callback(null);
}

function isEpisodeLogoAdded(callback) {
  prompt.start();
  prompt.get({
    name: 'yesno',
    message: 'Have you added the episode logo in start/logo.png? (y/n) ',
    validator: /y[es]*|n[o]?/,
    warning: 'Must respond yes or no'
  }, function (error, result) {
    if (error) {
      console.log('ERROR: Checking if episode logo is added: ' + error);
      return;
    }

    if (result.yesno === 'y') {
      callback(null);
    }
    else {
      console.log(clc.red('Add your episode logo in start/logo.png'));
      return;
    }
  });
}

function openApps(config, callback) {

  if (exec('open ' + config.postFile).code !== 0) {
    return;
  } else {
    console.log('SUCCES: Opened post file for reference');
  }

  if (exec('open "/Applications/QuickTime Player.app"').code !== 0) {
    return;
  } else {
    console.log('SUCCESS: Opened QuickTime for recording');
  }

  if (exec('open "/Applications/Utilities/Audio MIDI Setup.app"').code !== 0) {
    return;
  } else {
    console.log('SUCCESS: Opened Audio Midi for volume adjustment');
  }

  if (exec('osascript -e \'tell app "System Preferences" to set current pane to pane "fr.madrau.switchresx.prefpane"\'').code !== 0) {
    return;
  } else {
    console.log('SUCCESS: Opened switchresx for screen resolution adjustment');
  }

  console.log(clc.green('You are now ready to record the show!'));

  callback(null);
}


