module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      style: ['css', 'styleguide']
    },
    copy: {
      styleguide: {
        files: [
          { src: ['sass/styleguide.md'], dest: 'css/styleguide.md'}
        ]
      }
    },
    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/style.doc.css': 'sass/style.scss'
        }
      },
      production: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },
    shell: {
      styleguide: {
        command: 'kss-node css styleguide --css css/style.doc.css --template styleguide-template'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['clean', 'sass', 'copy', 'shell']);

};
