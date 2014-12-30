var program = require('commander');
var fs = require('fs');
var async = require('async');
var path = require('path');
var clc = require('cli-color');
require('shelljs/global');

module.exports = function(config) {
  program
    .command('new')
    .description('create a new episode with configuration data')
    .action(function() {

      async.series([
        function(next) { editConfigYML(config, next) },
        function(next) { createFolders(config, next) },
        function(next) { createFileFromTemplate(config, next) },
        function(next) { openFoldersAndApps(config, next) }
      ], function() {
        console.log(clc.green('New episode created: ' + config.num + ' ' + config.episode));
      });

    });
}

function editConfigYML(config, callback) {

  [config.configYMLFile, config.devConfigYMLFile].forEach(function(file) {
    fs.readFile(file, 'utf8', function(error, data) {
      if (error) {
        console.error(error);
        return;
      }

      var pastEpisode = '\'' + config.prevEpisodeNum + '-' + config.prevEpisode + '\'';
      var re = new RegExp(pastEpisode,'g');

      data = data.replace(re, pastEpisode + ',\n  \'' + config.num + '-' + config.episodeLowercase + '\'');

      fs.writeFile(file, data, 'utf8', function(error) {
        if (error) {
          console.log('ERROR: Write to ' + file + ': ' + error);
          return;
        }
        console.log('SUCCESS: Edited ' + path.basename(file) + ' to ignore the current episode folder');
        callback(null);
      });
    });
  })
}

function createFolders(config, callback) {
  var episodeDirectory = config.repoDir + config.num + '-' + config.episodeLowercase;
  var desktopDirectory = config.desktopDir + config.episodeLowercase;

  mkdir(episodeDirectory);
  console.log('SUCCESS: Created folder ' +  path.basename(episodeDirectory));

  mkdir(desktopDirectory);
  console.log('SUCCESS: Created folder ' +  path.basename(desktopDirectory));

  callback(null);
}

function createFileFromTemplate(config, callback) {
  var newReadme = config.repoDir + config.num + '-' + config.episodeLowercase + '/' + config.readme;
  var templateReadme = config.repoDir + config.templateDir + config.readme;
  var newPost = config.repoDir + '_posts/' + config.postDate + '-' + config.episodeLowercase + '.md';
  var templatePost = config.repoDir + config.templateDir + config.templatePost;

  cp(templateReadme, newReadme);
  cp(templatePost, newPost);

  [newReadme, newPost].forEach(function(file) {
    fs.readFile(file, 'utf8', function(error, data) {
      if (error) {
        console.log(error);
        return;
      }

      data = data.replace(/{{NUM}}/g, config.num);
      data = data.replace(/{{EPISODE}}/g, config.episode);
      data = data.replace(/{{EPISODE_LOWERCASE}}/g, config.episodeLowercase);
      data = data.replace(/{{VERSION}}/g, config.version);
      data = data.replace(/{{WEBSITE}}/g, config.website);

      fs.writeFile(file, data, 'utf8', function(error) {
        if (error) {
          console.log('ERROR: Write to '+ path.basename(file) +  ':  ' + error);
          return;
        }
        console.log('SUCCESS: Created file with episode data in ' + path.basename(file));
      });

    });
  })
}

function openFoldersAndApps(config, callback) {
  var desktopDirectory = config.desktopDir + config.episodeLowercase;
  var newPost = config.repoDir + '_posts/' + config.postDate + '-' + config.episodeLowercase + '.md';

  exec('open ' + desktopDirectory);
  console.log('SUCCESS: Opened folder ' +  path.basename(desktopDirectory));

  exec('subl ' + desktopDirectory);
  console.log('SUCCESS: Opened folder ' +  path.basename(desktopDirectory) + ' in text editor');

  exec('open ' + config.app.gitx);
  console.log('SUCCESS: Opened ' +  config.app.gitx);

  exec('open ' + newPost);
  console.log('SUCCESS: Opened ' +  path.basename(newPost));

  callback(null);
}
