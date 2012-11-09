module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-spell');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://PROJECT_WEBSITE/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'YOUR_NAME; Licensed MIT */'
    },

    clean: {
      build: ['js/script.js', 'css/style.css']
    },

    concat: {
      dist: {
        src: ['css/bp.css', 'css/main.css', 'css/helper.css'],
        dest: 'css/style.css'
      }
    },

    copy: {
      dist: {
        files: {
          "publish/index.html": "index.html",
          "publish/css/style.css": "css/style.css",
          "publish/css/reset.css": "css/reset.css",
          "publish/css/normalize.css": "css/normalize.css",
          "publish/js/script.js": "js/script.js"
        }
      }
    },

    min: {
      dist: {
        src: ['js/main.js'],
        dest: 'js/script.js'
      }
    },

    spell: {
      all: {
        src: ['index.html'],
        options: {
          lang: 'en'
        }
      }
    },
    watch: {
      files: ['css/*.css', 'js/*.js'],
      tasks: 'concat min'
    }
  });

  grunt.registerTask('default', 'clean concat min');
  grunt.registerTask('pub', 'clean concat min copy');

};
