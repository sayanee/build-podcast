/*
 * grunt-spell
 * https://github.com/shama/grunt-spell
 *
 * Copyright (c) 2012 Kyle Robinson Young
 * Licensed under the MIT license.
 */

exports.init = function(grunt, options) {
  'use strict';

  var exports = {};
  options = options || {};

  // TODO: ditch this when grunt v0.4 is released
  grunt.util = grunt.util || grunt.utils;

  // init teacher
  var teacher = require('teacher');
  var teach = new teacher.Teacher(options.lang || 'en', options.ignore || []);

  // Length of table lines
  var lineLen = 26;

  // Loop through files and check spelling
  exports.checkSpelling = function(files, done) {
    if (typeof files === 'string') {
      files = [files];
    }
    grunt.util.async.forEachSeries(files, function(file, next) {
      grunt.log.ok('Checking ' + file + '...');

      var data = grunt.file.read(file);
      teach.check(data, function(err, typos) {
        exports.printTypos(typos || []);
        next();
      });

    }, done);
  }

  // Display typos
  exports.printTypos = function(typos) {
    var table = [];
    var widths = [];
    typos = typos || [];

    if (typos.length < 1) {
      grunt.log.ok('No errors found.').writeln('');
      return;
    }

    exports.printTable(['Type', 'Error', 'Suggestions']);
    exports.hr();

    typos.forEach(function(typo) {
      // Get suggestions
      var sug = (typo.suggestions && typo.suggestions.option) || [];
      if (typeof sug === 'string') {
        sug = [sug];
      }
      sug = grunt.util._.map(sug, function(i) { return '"' + String(i).green + '"'; });

      // Build table and print
      exports.printTable([
        String(typo.description).cyan,
        '"' + String(typo.string).red + '"',
        sug.join(', ')
      ]);
    });

    exports.hr();
    grunt.log.writeln('');
  }

  // Helper for printing lines in a table
  exports.printTable = function(lines) {
    var widths = lines.map(function() { return lineLen; });
    grunt.log.writeln(grunt.log.table(widths, lines));
  }

  // Print 3 col horizontal line
  exports.hr = function() {
    exports.printTable([
      new Array(lineLen - 1).join('-'),
      new Array(lineLen - 1).join('-'),
      new Array(lineLen - 1).join('-'),
    ]);
  }

  return exports;
};
