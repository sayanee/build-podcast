#Build Podcast Ep 27 - Yeoman
[Screencast link](http://build-podcast.com/yeoman/)

[Yeoman](http://yeoman.io/) serves to help us create a modern workflow for building modern applications. In this episode, we will create a little project on terminologies related to [object-oriented programming (oop)](http://en.wikipedia.org/wiki/Object-oriented_programming) that will help us explore the main features of Yeoman such as scaffolding, compiling into css and js, linting, starting a local web server, image optimisation and so much more!

#Background on Yeoman and Tools

1. [Main website](http://yeoman.io/), [twitter](http://twitter.com/yeoman), [intro video](http://www.youtube.com/watch?v=vFacaBinGZ0#!)
2. [installation](https://github.com/yeoman/yeoman/wiki/Manual-Install)


#Things to learn with Yeoman

###1. installing yeoman

1. in the command line: `curl -L get.yeoman.io | bash`
2. the [installation](https://github.com/yeoman/yeoman/wiki/Manual-Install) will prompt you to install its pre-requisites as needed such as [Homebrew](http://mxcl.github.com/homebrew/), [Command Line Tools for Xcode](https://developer.apple.com/xcode/), [Compass](http://compass-style.org/), [Git](http://git-scm.com/), [JPEGTran](http://jpegclub.org/jpegtran/), [NodeJS](http://nodejs.org/), [npm](https://npmjs.org/), [PhantomJS](http://phantomjs.org/), [Ruby](http://www.ruby-lang.org/en/), [RubyGems](http://rubygems.org/), [OptiPNG](http://optipng.sourceforge.net/) and yeoman itself.
3. once installed check with `yeoman --version`
4. with just `yeoman` or `yeoman help` you will also get a list of helpful commands
5. `yeoman init --help` will show a list of projects to get started with

###2. starting a simple project in yeoman

1. go to an empty project folder `oop` and `yeoman init`

    ```
    [?] Would you like to include Twitter Bootstrap for Compass instead of CSS? (Y/n) Y
    [?] Would you like to include the Twitter Bootstrap JS plugins? (Y/n) n
    [?] Would you like to include RequireJS (for AMD support)? (Y/n) n
    [?] Would you like to support writing ECMAScript 6 modules? (Y/n) n
    [?] Do you need to make any changes to the above before continuing? (y/N) N
    ```
 2. start the yeoman server with `yeoman server`
 
###3. add in plugins/components to the project

1. `yeoman list` will list all plugins for the project - will be nil
2. `yeoman search` to list packages available for install
3. `yeoman install prism` to install [prismjs](http://prismjs.com/) for syntax highlighting
    - connect styles with `<link rel="stylesheet" href="components/prism/prism.css">`
    - connect scripts with `<script src="components/prism/prism.js"></script>`
4. `yeoman list` will list prism now
5. `yeoman update` will list 
6. tryout `yeoman install <package>` and then `yeoman uninstall <package>`

###4. prepare for production

1. `Ctrl + C` to quit the running any server
2. `yeoman build` to run `Gruntfile.js` - new folder `dist` created for production
3. start server `yeoman server:dist` to view production ready app from the `dist` folder


#More Resources on Yeoman

1. [Say Yo to Yeoman](http://net.tutsplus.com/tutorials/tools-and-tips/say-yo-to-yeoman/) from Nettuts
2. [Yeoman at your Service](http://www.adobe.com/devnet/html5/articles/yeoman-at-your-service.html) from Adobe
3. [Improved developer tooling and Yeoman](http://addyosmani.com/blog/improved-developer-tooling-and-yeoman/) by Addy Osmani
4. [The Breakpoint](http://www.youtube.com/watch?v=ktwJ-EDiZoU) episode on Yeoman by Paul Lewis and Addy Osmani
5. [Web Application Development Workflow](http://www.youtube.com/watch?v=vDbbz-BdyYc) talk by Paul Irish

#More Resources on the episode project about Object Oriented Programming (OOP)

on oop:

1. [Python and OOP](http://net.tutsplus.com/tutorials/python-tutorials/python-from-scratch-object-oriented-programming/) by Nettuts
2. [JavaScript and OOP](https://developer.mozilla.org/en-US/docs/JavaScript/Introduction_to_Object-Oriented_JavaScript) by MDN
3. [PHP and OOP](http://www.lynda.com/PHP-tutorials/Object-Oriented-Programming-PHP/107953-2.html) by Lynda
4. [OOP video explanation](http://www.youtube.com/watch?v=lbXsrHGhBAU) by CodeSchool.org
5. [OOP: A critical appraoch](http://www.udemy.com/blog/object-oriented-programming-a-critical-approach/) by Udemy blog

on building the project:

1. [prismjs](http://prismjs.com/) for syntax highlighting



#Related Build Podcast episodes

- [terminal](http://build-podcast.com/terminal/)
- [package managers](http://build-podcast.com/package-managers/)
- [gruntjs](http://build-podcast.com/gruntjs/)
- [requirejs](http://build-podcast.com/requirejs/)

#Build Link of this Episode

[The Breakpoint](https://developers.google.com/live/shows/11128541/) [[youtube](http://www.youtube.com/user/GoogleDevelopers/videos?query=breakpoint)], a live show hosted by [Paul Irish](http://paulirish.com/) and [Addy Osmani](http://addyosmani.com/blog/).