#Build Podcast Ep 17 - Jade
[Screencast link ](http://build-podcast.com/jade/)

[Jade](http://jade-lang.com/) is a templating language to output html. As a newbie, this is a great way to create static html pages by including basic logic, partial views and many more. For advanced uses, jade can also be used with [node.js](http://nodejs.org/) and [express.js](http://expressjs.com/).


#Tools used for Jade:

1. [Jade official page](http://yslow.org/)
2. [Jade documentation](https://github.com/visionmedia/jade)
2. [Jade Syntax Documentation](http://naltatis.github.com/jade-syntax-docs/)

#Getting started Jade

###1. Install jade
1. in the command line, check [node](http://nodejs.org/) is available with `node -v`
2. in the command line, check [npm](https://npmjs.org/) is available with `npm -v`
3. in the command line, install jade globally `sudo npm install jade -g` or in your local project with `sudo npm install jade`
4. check that jade is install with the [latest version](https://npmjs.org/package/jade) with `npm info jade`

###2. Initiate the project

5. make an empty project folder and `mkdir project && cd project && mkdir jade css img && mkdir jade/partials && touch css/style.css jade/index.jade jade.makefile` to create empty folder and file structure:

    ```
    .
    ├── css
    │   └── style.css
    ├── img
    ├── index.html
    ├── jade
    │   ├── index.jade
    │   └── partials
    └── jade.makefile
    ```
    
###3. Hello World in Jade

6. create the simplest possible html file with jade. write the following in `jade/index.jade`

    ```
    h1 Hello World
    ```
7. in the command line run `jade jade/index.jade` and check there's a new html file `index.html` created in the jade folder. 

###4. Continuous compilation with Jade

8. ensure `make` is [installed](http://stackoverflow.com/questions/6767481/where-can-i-find-make-program-for-mac-os-x-lion). check what is `make` with the command line `man make`. press `q` to exit the manual.
8. ensure `watch` is [installed](http://osxdaily.com/2010/08/22/install-watch-command-on-os-x/). check watch's program path with the command line `which watch`. 
9. put in the following code inside `jade.makefile` using the [make](http://en.wikipedia.org/wiki/Make_(software):

    ```
    JADE = $(shell find jade/*.jade)
    HTML = $(patsubst jade/%.jade, %.html, $(JADE))
    
    all: $(HTML)
    
    %.html: jade/%.jade
    	jade < $< --out $< --path $< --pretty > $@
    
    clean:
    	rm -f $(HTML)
    
    .PHONY: clean
    ```
    
8. in the command line, run `watch make -f jade.makefile` and this will automatically create the html files when a change in the jade folder is detected


#More resources 

1. [jade with node.js](http://devashish.co.in/2012/01/27/node-jspart-3-jade-bootstrap/)
2. [jade with express.js](http://www.hacksparrow.com/express-js-tutorial.html)
3. [an introduction to jade](http://www.franz-enzenhofer.com/jade)
4. [codekit](http://incident57.com/codekit/) to compile jade with a user-friendly GUI
5. [haml-js](https://github.com/creationix/haml-js) - another templating language


#Related Episodes

1. [package managers for npm](http://build-podcast.com/package-managers/)
2. [Web Fonts](http://build-podcast.com/web-fonts/) on how to insert Google Web Fonts

#Build Link of this Episode

[The New & Improved Developer Toolbelt](http://dl.dropbox.com/u/70775642/talks/tooling/fronteers/index.html) by [Addy Osmani](http://addyosmani.com/blog/) [twitter](https://twitter.com/addyosmani)

#Credits

Thanks to the lovely game [cpu wars](http://us.cpuwarsthegame.com/) for igniting the interest in the wonderful history of CPU!