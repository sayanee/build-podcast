---
title: 048 PhantomJS
title_lowercase: 048 phantomjs
tags: tutorial, screencast, technology, development, javascript, phantomjs, headless, browser, automation, testing
description: PhantomJS is a headless Webkit. We can make use of it to do some website testing, screen capture, page automating and network monitoring. We will explore all these features of PhantomJS in this episode.
permalink: /phantomjs/
enclosure: http://video.build-podcast.com/048-phantomjs.mp4
length: 110673514
version: 1.9.1
website: http://phantomjs.org
---

<div id="video"><iframe src="//player.vimeo.com/video/70712887" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>

[PhantomJS](http://phantomjs.org/) is a headless Webkit. We can make use of it to do some website testing, screen capture, page automating and network monitoring. We will explore all these features of PhantomJS in this episode.

<p><strong>Download video</strong>: <a href="http://video.build-podcast.com/048-phantomjs.mp4" download="build-podcast-048-phantomjs.mp4">mp4</a></p>

**Sample code**: [Github](https://github.com/sayanee/build-podcast/tree/master/048-phantomjs)

**Version**: 1.9.1

##Background on PhantomJS

1. [Main website](http://phantomjs.org/)
1. [Github](https://github.com/ariya/phantomjs) and its [Wiki](https://github.com/ariya/phantomjs/wiki)
1. What is a [headless browser](http://blog.arhg.net/2009/10/what-is-headless-browser.html) - [some examples](https://gist.github.com/evandrix/3694955)?
1. [API Reference](https://github.com/ariya/phantomjs/wiki/API-Reference)
    1. [webpage](https://github.com/ariya/phantomjs/wiki/API-Reference-WebPage)
    1. [system](https://github.com/ariya/phantomjs/wiki/API-Reference-System)
    1. [filesystem](https://github.com/ariya/phantomjs/wiki/API-Reference-FileSystem)
    1. [webserver](https://github.com/ariya/phantomjs/wiki/API-Reference-WebServer)
1. [Examples](https://github.com/ariya/phantomjs/wiki/Examples)

##Things to learn with PhantomJS

###1. install

1. [download](http://phantomjs.org/download.html)
1. transfer the file `bin/phantomjs` to an appropriate folder which is in your path

    ```
    phantomjs-1.9.1-macosx/bin/phantomjs --version
    ```
1. go to the command line and query it

    ```
    phantomjs --version
    phantomjs --help
    ```
1. start a REPL

    ```
    phantomjs
    > console.log('hello');
    ```

1. hello world with [quick start](https://github.com/ariya/phantomjs/wiki/Quick-Start) with Hello World. Create a file `1-hello.js`

    ```
    console.log('Hello, world!');
    phantom.exit();
    ```

    in command line

    ```
    phantomjs 1-hello.js
    ```

###2. take screenshot

1. new file `2-screenshot.js`

    ```
    var page = require('webpage').create();

    page.open('http://google.com/', function () {
      page.render('google.png');
      phantom.exit();
    });
    ```
1. run in command line and check that a new image `google.png` is created

    ```
    phantomjs 2-screenshot.jpg
    ```

###3. load time

1. new file `3-speed.js`

    ```
    var page = require('webpage').create(),
      t = Date.now();

    page.open('http://flickr.com/', function (status) {
      t = Date.now() - t;
      console.log('Loading time ' + t + ' msec');

      phantom.exit();
    });
    ```
1. integrate with variable for url, command line arguments, checking for error, etc - [example](https://github.com/ariya/phantomjs/wiki/Quick-Start#page-loading)

###4. API - webpage

1. create folder `project/index.html`

    ```
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>Hello PhantomJS</title>
    </head>
    <body>

    <h1>I'm exploring PhantomJS!</h1>
    <img src="phantomjs-logo.png" alt="PhantomJS Logo">

    <button id="color">change color</button>

    <script>
    document.getElementById("color").addEventListener("click", function( event ) {
      document.body.style.backgroundColor = 'lightblue';
    }, false);
    </script>

    </body>
    </html>
    ```

1. new file `project.js`. explore
    - console `Testing ` + url
    - console log title
    - onConsole
    - render `before.jpg`
    - bgColor `white`
    - includeJS and click + `after.jpg`
    - require('fs') + profect files
    - `before.jpg` and `after.jpg` sizes


    ```
    var page = require('webpage').create(),
      fs = require('fs'),
      url = 'http://localhost:8000',
      path = '/Users/sayanee/Desktop/phantomjs';

    page.viewportSize = { width: 1200, height: 780 };

    console.log('Testing on ' + url);
    console.log('Project files: ' + fs.list(path));

    page.onConsoleMessage = function (msg) {
      console.log('Page title: ' + msg);
    };

    page.open(url, function (status) {

      page.evaluate(function () {
        document.body.bgColor = 'white';
        console.log('<title>' + document.title + '</title>');
      });

      page.render('before.jpg');
      console.log('before.jpg [' + fs.size(path + '/before.jpg') + ' bytes]');

      page.includeJs("http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js", function() {

        page.evaluate(function() {
          $("#color").click();
        });
        page.render('after.jpg');
        console.log('after.jpg [' + fs.size(path + '/after.jpg') + ' bytes]');

        phantom.exit();
      });

    });
    ```




##More Resources on PhantomJS
1. [SlimerJS](http://www.slimerjs.org/) for Gecko
1. [PhantomJS ecosystem](https://github.com/ariya/phantomjs#ecosystem)
1. [CasperJS](http://casperjs.org/) - navigation scripting & testing utility
1. [More Tutorial](https://github.com/ariya/phantomjs/wiki/Buzz)

##Build Link of this episode

[JavaScript Jabber podcast](http://javascriptjabber.com/)
