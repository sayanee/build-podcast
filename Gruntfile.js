module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      assets: ['style.css', 'script.js']
    },
    compass: {
      production: {
        options: {
          specify: 'sass/style.sass',
          cssPath: '.',
          outputStyle: 'compressed',
          noLineComments: true
        }
      }
    },
    uglify: {
      options: {
        mangle: true
      },
      production: {
        files: {
          'script.js': [
            'js/lib/jquery/dist/jquery.min.js',
            'js/lib/fitvids/jquery.fitvids.js',
            'js/script.js'
          ]
        }
      }
    },
    watch: {
      styles: {
        files: ['sass/**/*.sass'],
        tasks: ['compass:production']
      },
      script: {
        files: ['js/script.js'],
        tasks: ['uglify:production']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['clean', 'compass', 'uglify', 'watch']);

};
