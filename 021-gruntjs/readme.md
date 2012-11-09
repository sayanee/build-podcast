#Build Podcast Ep 21 - Grunt.js
[Screencast link ](http://build-podcast.com/gruntjs/)

[Grunt.js](http://gruntjs.com/) is tool task-based command line [build tool](http://en.wikipedia.org/wiki/Build_automation) for JavaScript projects. Automate your build tasks like concatenation, minification, linting, testing and many others with some simple configuration or even with some nifty grunt.js plugins!

#Background on grunt.js:

1. [Grunt.js homepage](http://gruntjs.com/) and what is a [build tool](http://en.wikipedia.org/wiki/Build_automation)
2. [Grunt.js documentation](https://github.com/gruntjs/grunt/blob/master/docs/toc.md)
3. [Meet Grunt](http://net.tutsplus.com/tutorials/javascript-ajax/meeting-grunt-the-build-tool-for-javascript/): The Build Tool for JavaScript
4. [Grunt](http://javascriptplayground.com/blog/2012/04/grunt-js-command-line-tutorial): A command line Tool
5. [introducing grunt](http://weblog.bocoup.com/introducing-grunt/) by bocoup
5. [node package manager (npm)](https://npmjs.org/)

#Things to learn with grunt.js


###1. check pre-requisites:

In the command line::

1. check that node package manager is installed: `npm -v`
2. install grunt globally with npm: `sudo npm install -g grunt`
3. check that grunt is successfully installed and check the [version](https://github.com/gruntjs/grunt#release-history): `npm info -g grunt` or just `grunt --version`
4. for more info, use `grunt --help`
5. find grunt plugins `npm find gruntplugin`

###2.  run grunt
1. run `grunt init:gruntfile` and answer the questions
2. a `grunt.js` file will be created
3. if you want to run testing with [qunit](http://qunitjs.com/), install [phantomjs](http://phantomjs.org/download.html)
    - unzip or `git clone`
    - move `phantomjs/bin/phantomjs` to typically `/usr/local/bin`
4. run `grunt`


#More Resources on build tools
1. what is a [build tool](http://en.wikipedia.org/wiki/Build_automation)
1. gnu [make](http://www.gnu.org/software/make/)
2. ruby [rake](http://rake.rubyforge.org/)

#Related Build Podcast episodes

- [Package Managers](http://build-podcast.com/package-managers/) - rubygem

#Build Link of this Episode

[Distilled Hype](http://distilledhype.com/), premium links for front-end developers, distilled from the latest hype by [@hellokahlil](http://twitter.com/hellokahlil)