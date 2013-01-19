#Build Podcast Ep 30 - Closure
[Screencast link](http://build-podcast.com/closure/)

[Closure](https://developers.google.com/closure/) is a set of tools developed by Google and the [Closure Compiler](https://developers.google.com/closure/compiler/) is part of it for JavaScript optimisation and minification. In this episode, we will take a simple JavaScript project about CSS colors and run it through the various features of Closure! We will also use the [Closure Lint](https://developers.google.com/closure/utilities/) and check our code.

#Background on Closure

1. [Closure](https://developers.google.com/closure/)
2. [Closure Compiler](https://developers.google.com/closure/compiler/)
3. [Closure Linter](https://developers.google.com/closure/utilities/) 


#Things to learn with Closure

###closure linter

1. download the closure linter with 

    ```
    sudo easy_install http://closure-linter.googlecode.com/files/closure_linter-latest.tar.gz
    ```
2. [install Sublime Text package](https://github.com/fbzhong/sublime-closure-linter) if you want to compile inside the text editor   
3. Run the closure linter:
    - from the command line: `gjslint script.js`
    - from inside Sublime Text: `Tools > Lint > Run Closure Linter` or `Shift + Ctrl + Opt + J`  
    
###compiler options

- `compilation_level`
    1. `WHITESPACE_ONLY`
    2. `SIMPLE_OPTIMIZATIONS`
    3. `ADVANCED_OPTIMIZATIONS`
- `formatting`
    1. `pretty_print`
    2. `print_input_delimiter`

###1. closure compiler server

1. go to [closure-compiler.appspot.com](http://closure-compiler.appspot.com/)
2. try out the various options for **compilation level**, **formatting** and even the **warnings**, **errors**, and **post data**
3. externs url paramater will be needed for jQuery. add it to the top along with other comments for the Closure Compiler:
    
    ```
    // @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/jquery-1.8.js
    ```

###2. closure api

1. create an html page [according to the guide](https://developers.google.com/closure/compiler/docs/gettingstarted_api)
2. play around with the various options

###3. closure application

1. [download the zip files for closure-compiler](https://developers.google.com/closure/compiler/docs/gettingstarted_app) and transfer the file `compiler.jar` to the project folder 
2. in the command line, navigate to the project with `compiler.jar`
3. in the command line:
    - **help** `java -jar compiler.jar --help`
    - option with **normal compilation** `java -jar compiler.jar --js script.js --js_output_file script.min.js`
    - options with **compilation level** `--compilation_level ADVANCED_OPTIMIZATIONS`
    - option with **warnings** `--warning_level VERBOSE`
    - with **externs** for jquery ` --externs jquery.closure.js` where the file `jquery.closure.js` [has the contents of jquery](http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/jquery-1.8.js)
    - with options to **turn off the named class of warnings** `--jscomp_off=checkVars`
    - with **source maps** `--create_source_map script.min.js.map --source_map_format=V3` and add `//@ sourceMappingURL=script.min.js.map` at the end of the file `script.min.js`
4. the complete command
    
    ```
    java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js script.js --js_output_file script.min.js --warning_level VERBOSE --externs jquery.closure.js --jscomp_off=checkVars --create_source_map script.min.js.map --source_map_format=V3
    ```
    
###with gruntjs

1. install [gruntjs](http://gruntjs.com/): `npm install -g grunt`
2. `grunt init:gruntfile` to create `grunt.js` file. all answers can be *No*.
3. `npm install grunt-closure-compiler`
4. edit the file `grunt.js` to contain only the `closure-compiler` tak:

    ```
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

    ```


#More Resources on Closure

- [How to use closure compiler and jquery](http://stackoverflow.com/questions/9592534/google-closure-compiler-and-jquery)
- [JavaScript Continuous Integration with Google Closure](http://www.benfarrell.com/2012/05/14/javascript-continuous-integration-with-google-closure/)
- [closure error for undeclared variables](http://stackoverflow.com/questions/10857775/google-closure-variable-window-event-console-is-undeclared-error)
- [closure compiler with gruntjs](https://github.com/gmarty/grunt-closure-compiler)
- [gruntjs and requirejs](https://github.com/asciidisco/grunt-requirejs)

#More resources on the episode project

- [css color names](http://www.crockford.com/wrrrld/color.html)

#Related Build Podcast episodes

- [gruntjs](http://build-podcast.com/gruntjs/)
- [requirejs](http://build-podcast.com/requirejs/)


#Build Link of this Episode

[HN Pod](http://hnpod.com/) is 30min podcast on the top stories from the [Hacker News](http://news.ycombinator.com/best).