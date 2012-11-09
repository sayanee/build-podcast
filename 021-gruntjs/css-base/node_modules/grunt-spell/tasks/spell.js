/*
 * grunt-spell
 * https://github.com/shama/grunt-spell
 *
 * Copyright (c) 2012 Kyle Robinson Young
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // TODO: ditch this when grunt v0.4 is released
  grunt.util = grunt.util || grunt.utils;

  grunt.registerMultiTask('spell', 'A Grunt plugin for spellchecking documents.', function() {
    var helpers = require('grunt-contrib-lib').init(grunt);
    var options = helpers.options(this);
    var spellHelper = require('./lib/spell.js').init(grunt, options);
    var done = this.async();

    // TODO: ditch this when grunt v0.4 is released
    this.files = this.files || helpers.normalizeMultiTaskFiles(this.data, this.target);

    // Loop through each pattern and run check spelling
    grunt.util.async.forEachSeries(this.files, function(file, next) {
      spellHelper.checkSpelling(grunt.file.expandFiles(file.src), next);
    }, function() {
      done();
    });

  });

};
