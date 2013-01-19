module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-closure-compiler');
  grunt.initConfig({
    'closure-compiler': {
      frontend: {
        closurePath: 'closure',
        js: 'script.js',
        jsOutputFile: 'script.min.js',
        options: {
          compilation_level: 'ADVANCED_OPTIMIZATIONS',
          language_in: 'ECMASCRIPT5_STRICT',
          externs: 'jquery.closure.js',
          warning_level: 'VERBOSE',
          jscomp_off: 'checkVars',
          create_source_map: 'script.closure.js.map',
          source_map_format: 'V3',
          define: [
          '"DEBUG=false"',
          '"UI_DELAY=500"'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', 'closure-compiler');

};
