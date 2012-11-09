module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    spell: {
      all: {
        src: ['test/fixtures/*'],
        options: {
          lang: 'en',
          ignore: ['cliches']
        }
      }
    },
    lint: {
      files: ['grunt.js', 'tasks/**/*.js']
    },
    test: {
      files: ['test/**/*_test.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    }
  });
  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['lint', 'spell']);
};
