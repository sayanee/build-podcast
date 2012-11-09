var grunt = require('grunt');

// TODO: ditch this when grunt v0.4 is released
grunt.util = grunt.util || grunt.utils;
var hooker = grunt.util.hooker;

var spell = require('../../../tasks/lib/spell').init(grunt);
var path = require('path');

exports.spell = (function() {
  'use strict';

  var _test = {};

  _test.setUp = function(done) {
    this.fixtures = path.resolve(__dirname, '..', '..', 'fixtures');
    done();
  };

  _test.errors = function(test) {
    test.expect(1);
    hooker.hook(spell, 'printTypos', function(typos) {
      test.ok(typos.length === 7, 'Did not find 7 expected typos.');
    });
    spell.checkSpelling(path.join(this.fixtures, 'errors.md'), test.done);
  };

  _test.noerrors = function(test) {
    test.expect(1);
    hooker.hook(spell, 'printTypos', function(typos) {
      test.ok(typos.length === 0, 'Found a typo when it should have not.');
    });
    spell.checkSpelling(path.join(this.fixtures, 'noerrors.md'), test.done);
  };

  return _test;
}());
