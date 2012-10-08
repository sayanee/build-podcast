#Build Podcast Ep 17 - Jade
[Screencast link ](http://build-podcast.com/jade/)

[Jade](http://jade-lang.com/) is a templating language to output html. As a newbie, this is a great way to create static html pages by including basic logic, partial views and many more. For advanced uses, jade can also be used with node.js and express.js.


#Tools used for Jade:

1. [Jade official page](http://yslow.org/)
2. [Jade documentation](https://github.com/visionmedia/jade)
2. [Jade Syntax Documentation](http://naltatis.github.com/jade-syntax-docs/)

#Getting started Jade

###Install jade
1. in the command line, check [node](http://nodejs.org/) is available with `node -v`
2. in the command line, check [npm](https://npmjs.org/) is available with `npm -v`
3. in the command line, install jade globally `sudo npm install jade -g` or in your local project with `sudo npm install jade`
4. check that jade is install with the [latest version](https://npmjs.org/package/jade) with `npm info jade`

### Initiate the project

5. make an empty project folder and `mkdir project && cd project && mkdir jade css img && touch css/style.css jade/index.jade jade.makefile` to create empty folder and file structure:

    ```
    .
    |-- css
    |   `-- style.css
    |-- img
    |-- jade
    |   `-- index.jade
    `-- jade.makefile
    ```
    
###Hello World in Jade

6. create the simplest possible html file with jade. write the following in `jade/index.jade`

    ```
    h1 Hello World
    ```
7. in the command line run `jade jade/index.jade` and check there's a new html file `index.html` created in the jade folder. 

###Continuous compilation with Jade

8. ensure `make` is [installed](http://stackoverflow.com/questions/6767481/where-can-i-find-make-program-for-mac-os-x-lion). check what is `make` with the command line `man make`. press `q` to exit the manual.
8. ensure `watch` is [installed](http://osxdaily.com/2010/08/22/install-watch-command-on-os-x/). check watch's program path with the command line `which watch`. 
8. in the command line, run `watch make -f jade.makefile` and this will automatically create the html files when a change in the jade folder is detected

#Using jade

1. `doctype`, `head` and `body` tags
2. comments
3. `id`, `class` and `attributes`
4. 


#More resources 

1. [jade with node.js](http://devashish.co.in/2012/01/27/node-jspart-3-jade-bootstrap/)
2. [jade with express.js](http://www.hacksparrow.com/express-js-tutorial.html)
3. [an introduction to jade](http://www.franz-enzenhofer.com/jade)
4. [codekit]() to compile jade with a user-friendly GUI


#Related Episodes

1. [package managers for npm]()

#Build Link of this Episode

