---
title: 053 Command line apps
title_lowercase: 053 command-line-apps
layout: post
tags: tutorial, screencast, technology, development, cli, command line, terminal, thor, commander, ruby, node, shebang, options, arguments
description: Command line apps provide automation, one time batch processing or even execute an app in the command line. In this episode we will see how we can create such apps in cli using a programming language of our choice such as NodeJS and Ruby. We will then move on to create a full-fledged apps using Commander (with NodeJS) and Thor (with Ruby) to create a skeleton for a started web project.
permalink: /command-line-apps/
enclosure: http://video.build-podcast.com/053-command-line-apps.mp4
length: 143078113
---

<div id="video"><iframe src="//player.vimeo.com/video/77273976" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>

Command line apps provide automation, one time batch processing or even execute an app in the command line. In this episode we will see how we can create such apps in cli using a programming language of our choice such as [NodeJS](http://nodejs.org/) and [Ruby](https://www.ruby-lang.org/en/). We will then move on to create a full-fledged apps using [Commander](http://visionmedia.github.io/commander.js/) (with NodeJS) and [Thor](http://whatisthor.com/) (with Ruby) to create a skeleton for a started web project.

**Download video**: [mp4](http://video.build-podcast.com/053-command-line-apps.mp4)

**Sample code**: [Github](https://github.com/sayanee/build-podcast/tree/master/053-command-line-apps)

**Version**: [Commander 4.1.5](https://github.com/visionmedia/commander.js/), [Thor 0.18.1](https://github.com/erikhuda/thor)

**Similar episodes**: [002 Terminal](/terminal) [009 Package Managers](/package-managers), [019 Bash](/bash), [044 Node](/node)

##Background on Command line apps
1. [Commander](http://visionmedia.github.io/commander.js/) - [Github](https://github.com/visionmedia/commander.js) and [examples](https://github.com/visionmedia/commander.js/tree/master/examples)
1. [Thor](http://whatisthor.com/) - [Github](https://github.com/erikhuda/thor)
1. [Shebang](http://en.wikipedia.org/wiki/Shebang_(Unix\)) - tells the operating system which program loader to use

##Things to learn with shell script
1. [Why CLI](http://www.slideshare.net/hyfather/crafting-beautiful-cli-applications-in-ruby)?
    - one time batch processing
    - scriptable/automation
    - repeated tasks
    - loads of other packages/libraries
    - pipelining

1. Some terms:

    - **command**: E.g. `git` or `ssh` or `npm`
    - **option**: E.g. `git --version` or `node --help`
1. Steps to creating a simple shell script:

    1. create a file with Shebang and shell commands
    1. change permission
    1. symlink the file to the user path (check bash profile)

1. create a file called `myinfo`

    ```
    #!/bin/bash

    echo $USER
    ls -al
    ```
1. check permissions - current user cannot execute it

    ```
    $ ls -al myinfo
    -rw-r--r--  1 sayanee  staff  31 Oct 18 07:44 info
    ```
1. change permission and check permission again!

    ```
    $ chmod u+x myinfo
    $ ls -al info
    -rwxr--r--  1 sayanee  staff  31 Oct 18 07:44 info
    ```
1. execute `myinfo` in the same folder and in another folder

    ```
    $ myinfo
    sayanee
    total 8
    drwxr-xr-x  3 sayanee  staff  102 Oct 18 07:49 .
    drwxr-xr-x+ 5 sayanee  staff  170 Oct 18 07:21 ..
    -rwxr--r--  1 sayanee  staff   31 Oct 18 07:44 myinfo

    $ cd ~
    $ myinfo
    zsh: command not found: myinfo
    ```
1. check your `.bashrc` or `.zshrc` to create a path or choose an existing path

    ```
    export PATH=/Users/sayanee/Sites/scripts/:$PATH
    ```
1. create a symlink

    ```
    $ ln -s /path/to/original/filename /path/to/all/scripts/filename
    $ ln -s /Users/sayanee/Desktop/command-line-apps/myinfo /Users/sayanee/Sites/scripts/myinfo
    ```

##Things to learn with Thor
1. Install [Thor](https://github.com/erikhuda/thor)

    ```
    $ gem install thor
    $ thor version
    Thor 0.18.1
    $ thor help
    ```
1. create a file `app` with the following contents:

    ```
    #!/usr/bin/env ruby

    require "thor"

    class App < Thor

      desc "start", "start a project"
      def start
        puts "Started !"
      end
    end

    App.start ARGV
    ```
    remember to change permission and symlink to the path in your profile

    ```
    $ chmod u+x app
    $ ln -s /path/to/script/app /path/to/all/scripts/app
    ```

    execute the following in the command line:

    ```
    $ app
    $ app help
    $ app start
    ```
1. passing an argument

    ```
    ...
    desc "start NAME", "start a project with a NAME"
    def start name
      puts "Started #{name}!"
    end
    ...
    ```
    execute the following in the command line:

    ```
    $ app start travel
    $ app start todolist
    ```
1. optional arguments

    ```
    desc "start NAME", "start a project with a NAME"
    def start(name, author=nil)
        puts "Started #{name}!"
        puts "by #{author}" if author
    end
    ```
1. putting in another argument

    ```
    def start(name, deadline, author=nil)
        puts "Started #{name}!"
        puts "authored by #{author}" if author
        puts "to be completed by #{deadline}"
    end
    ```
1. passing as an option

    ```
    desc "start NAME", "start a project with a NAME"
    option :author
    def start(name, deadline)
      puts "Started #{name}!"
      puts "authored by #{options[:author]}" if options[:author]
      puts "to be completed by #{deadline}"
    end
    ```
    execute it in the command line

    ```
    app start todolist october --author "sayanee"
    ```
1. passing the type for option

    ```
    desc "start NAME", "start a project with a NAME"
    option :author
    option :multiuser, :type => :boolean
    def start(name, deadline, author=nil)
        puts "Started #{name}!"
        puts "authored by #{options[:author]}" if options[:author]
        puts "to be completed by #{deadline}"
        puts "It will be multiuser!" if options[:multiuser]
    end
    ```
    execute it in the command line

    ```
    $ app start todolist october --author "sayanee" --multiuser false
    $ app start todolist october --author "sayanee" --multiuser true
    ```


##Things to learn with CommanderJS
1. Install [Commander](https://github.com/visionmedia/commander.js/)

    ```
    $ npm install -g commander
    $ commander --version
    $ commander --help
    ```
1. create a new file called `start`, change permission and symlink it

    ```
    $ touch start
    $ ls -al start
    -rw-r--r--  1 sayanee  staff  69 Oct 18 08:06 start
    $ chmod u+x start
    $ ls -al start
    -rwxr--r--  1 sayanee  staff  69 Oct 18 08:06 start
    ```
1. `start` file contents

    ```
    #!/usr/bin/env node

    console.log('Hello World in Command line ;-)');
    ```

1. execute `start` in the command line!

    ```
    $ start
    Hello World in Command line ;-)
    ```
1. add module dependencies - if `npm install -g` and `NODE_PATH` is [set in the path](http://stackoverflow.com/questions/12594541/npm-global-install-cannot-find-module)
1. adding version and help - file contents of `start` now:

    ```
    #!/usr/bin/env node

    var program = require('commander');

    program
      .version('0.0.1')
      .parse(process.argv);

    console.log('Hello World in Command line ;-)');
    ```
1. passing in options

    ```
    ...

    program
      ...
      .option('-t, --html <file>', 'Add HTML file')
      .option('-c, --css <file>', 'Add CSS file')
      ...

    console.log('Created html file: ' + program.html);
    console.log('Created css file: ' + program.css);
    ```

    execute in the command line

    ```
    $ start --html index.html --css style.css
    ```
1. checking options

    ```
    if (process.argv.length < 3) program.help();
    ```

    execute in the command line

    ```
    $ start
    $ start --html index.html --css style.css
    ```

1. default options

    ```
    ...
    .option('-t, --html <file>', 'Add HTML file', 'index.html')
    ...
    if (!program.css) program.help();
    ...
    ```
1. add subcommand `serve`, try `start --help` in the command line again

    ```
    ...

    program
      .command('serve')
      .description('Open the project in the browser')
      .action(function(){
        console.log('opened!');
      });

    program.parse(process.argv);

    if (program.css) {
      console.log('Created html file: ' + program.html);
      console.log('Created css file: ' + program.css);
    }
    ```
1. check for number of arguments/ options and display the default help

    ```
    if (process.argv.length < 3) program.help();
    ```
1. add command line executions with [child_process](http://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback) - do note that error checking should be done in real projects!

    ```
    ...
    var exec = require('child_process').exec;
    ...
    program
      .command('serve')
      ...
      .action(function(){
        exec('open http://build-podcast.com');
        console.log('opened!');
      });
    ...
    ```
1. create template folder and files

    ```
    └── template
        ├── _css
        └── _html
    ```
    contents of `_html`:

    ```
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <link rel="stylesheet" href="{{STYLESHEET}}">
      <title>My new webproject</title>
    </head>
    <body>

    <h1>Hi there :-)</h1>
    <h2>A new web project is created!</h2>

    </body>
    </html>
    ```
    contents of `_css`:

    ```
    body {
      background-color: cornflowerblue;
    }
    ```
1. copy from template and create new project files

    ```
    ...
    var fs = require('fs');
    …
    program
      .command('serve')
      .description('Open the project in the browser')
      .action(function(){
        exec('python -m SimpleHTTPServer 8000');
        exec('open http://localhost:8000')
        console.log('View the new web project at http://localhost:8000');
      });
    ...

    var templatePath = '~/Desktop/command-line-apps/template/';

    if (program.css) {
      exec('cp ' + templatePath + '_css ' + program.css + ' && cp ' + templatePath + '/_html ' + program.html,
        function(error, stdout, stderr) {
          if (error) { return console.log('Error: ' + error); }

          fs.readFile(program.html, 'utf8', function(err, data) {
            if (err) { return console.log('Read file error: ' + err); }

            var newData = '<link rel="stylesheet" href="' + program.css + '">';
            data = data.replace(/{{STYLESHEET}}/g, newData);

            fs.writeFile(program.html, data, 'utf8', function(error) {
              if (error) { return console.log('Write file error: ' + err); }
              console.log('Created html file: ' + program.html);
              console.log('Created css file: ' + program.css);
            });

          });
      });

    }
    ```
1. adding colors to the command line. ensure you already did a global install with `npm install -g cli-color`

    ```
    var clc = require('cli-color');
    …
    console.log('Created ' + program.html);
    console.log('Created ' + program.css);
    console.log(clc.blue(program.html + ' and ' + program.css + ' are created!'));
```

##More Resources on Command line apps
1. [Tuts+ course on Command Line Apps in Ruby](https://tutsplus.com/course/command-line-apps-in-ruby/)
1. [PragProg book on Command Line Apps in Ruby](http://pragprog.com/book/dccar/build-awesome-command-line-applications-in-ruby) and the [author's talk](http://www.youtube.com/watch?v=1ILEw6Qca3U)
1. [Slides on CLI Ruby](http://www.slideshare.net/hyfather/crafting-beautiful-cli-applications-in-ruby)
1. [Writing CLI apps in Node](http://blog.liangzan.net/blog/2012/07/30/how-to-write-a-command-line-application-in-node-dot-js/) by Liang Zan
1. [CLI Tool in Node](http://javascriptplayground.com/blog/2012/08/writing-a-command-line-node-tool/)
1. in Ruby - [GLI](https://github.com/davetron5000/gli), [rainbow](https://github.com/sickill/rainbow), [gem-man](), [ronn](https://github.com/rtomayko/ronn)
1. Node CLI app - [part 1](http://www.slalompoint.com/node-command-line-interface-p1/) and [part 2](http://www.slalompoint.com/node-command-line-interface-p2/)
1. [Building your tools with Thor](http://blog.paracode.com/2012/05/17/building-your-tools-with-thor/)
1. Examples of projects using Commander: [Jade](https://github.com/visionmedia/jade/blob/master/bin/jade.js),

##Build Link of this episode
[Web Tools Weekly](http://webtoolsweekly.com/)
