#Build Podcast ep 044 - Node
[Screencast link](http://build-podcast.com/node/)

[NodeJS](http://nodejs.org/) is a V8 engine based event-driven I/O platform to build applications. In this episode we will explore the concepts of asynchronous, non-blocking programs along with how to schedule or delay the execution of a function with event loops and child processes. Lastly, we will end off with a [simple TCP chat server](http://www.youtube.com/watch?v=jo_B4LTHi3I).

Version: v0.10.8

Similar episodes: [009 Package Managers](http://build-podcast.com/package-managers/)

#Background on Node 

1. [Main website](http://nodejs.org/), [documentation](http://nodejs.org/api/) and [twitter](https://twitter.com/nodejs)
2. [Original NodeJS presentation](https://www.youtube.com/watch?v=ztspvPYybIY) and [an intro to node.js](http://www.youtube.com/watch?v=jo_B4LTHi3I) with Ryan Dahl


#Things to learn with Node 

##1. install and run

1. install [nodejs](http://nodejs.org/download/), [npm](https://npmjs.org/) (package manager) and [nvm](https://github.com/creationix/nvm) (manage node versions)

    ```
    $ npm --version
    1.2.21
    
    $ node --version
    v0.10.7
    
    $ nvm ls
    v0.8.18	v0.10.4	v0.10.7
    current: 	v0.10.7
    default -> 0.10.7 (-> v0.10.7)
    ```
1. run the node REPL in the command line with just `node` to type in javascript! to quit the REPL, it's `cntrl + c`. Also, try to query the global variable `process` including `process.env`, etc

    ```
    $ node
    > console.log('hello world in node!!');
    hello world in node!!
    undefined
    > typeof({});
    'object'
    > process
    ``` 
    
1. run javascript code with node in file `hello.js` (not in browser!)

    ```
    console.log('hello world in node!!');
    ```  
      
    run in command line:
    
    ```
    $ node hello.js
    hello world in node!!
    ```
    
    
##2. understanding async in javascript

1. **with Ruby** in file `index.rb`

    ```
    require 'timeout'

    puts 'Before - ' + Time.new.inspect
    sleep(5)
    puts 'After - ' + Time.new.inspect
    ```
    
    run the file in command line with `ruby index.rb`. notice the **2 seconds** time stamp difference
    
    ```
    Before - 2013-05-24 12:40:17 +0800
    After - 2013-05-24 12:40:22 +0800
    ```

1. **with Python** in file `index.py`

    ```
    from datetime import datetime
    import time
    
    print 'Before - ' + datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    time.sleep(5)
    print 'After - ' + datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    ``` 
    
    run the file in command line with `python index.py`. notice the **2 seconds** time stamp difference
    
    ```
    Before - 2013-05-24 12:43:23
    After - 2013-05-24 12:43:28
    ```

1. **with C** in file `index.c`

    ```
    #include <stdio.h>
    #include <time.h>
    #include <unistd.h>
    
    int main(void) {
    
      time_t rawtime;
      struct tm * timeinfo;
    
      time ( &rawtime );
      timeinfo = localtime ( &rawtime );
      printf("Before - %s\n", asctime (timeinfo) );
    
      usleep(5000000);
    
      time ( &rawtime );
      timeinfo = localtime ( &rawtime );
      printf("After - %s\n", asctime (timeinfo) );
    
    }

    ```
    
    run the file in command line with `clang index.c && a.out`. notice the **2 seconds** time stamp difference
    
    ```
    Before - Fri May 24 12:45:18 2013
    After - Fri May 24 12:45:23 2013
    ```        
1. **with node** in file `index.js` with [continuation passing style](http://en.wikipedia.org/wiki/Continuation-passing_style) where a function invokes a callback after the operation `setTimeout` is complete

    - pass the function as an argument to be called back later
    - function will be invoked later & remember the context in which it was declared
    - closure pattern: important in event driven programming
    - javascript: [first-class functions](http://en.wikipedia.org/wiki/First-class_function) & [closures](http://en.wikipedia.org/wiki/Closure_(computer_science)) 


    ```
    console.log( 'Before - ' + new Date().getSeconds() );

    setTimeout(function() {
      console.log( '5 seconds - ' + new Date().getSeconds() );
    }, 5000);
    
    console.log( 'After - ' + new Date().getSeconds() );
    ```
    
    run the file in command line with `node index.js`. notice NO **5 seconds** time stamp difference

    ```
    Before - 27
    After - 27
    5 seconds - 32
    ```
    
1. Event I/O programming in other languages:

    - Ruby's [Event Machine](http://rubyeventmachine.com/)
    - Python's [Twisted](http://twistedmatrix.com/trac/)
    - Perl's [Any Event](http://search.cpan.org/dist/AnyEvent/)


##3. modules

using [CommonJS](http://www.commonjs.org/) modular patterns

1. **my own modules**

    - `circle.js` files has:
    
    ```
    var PI = Math.PI;
    
    exports.area = function (r) {
      return PI * r * r;
    };
    
    exports.circumference = function (r) {
      return 2 * PI * r;
    };
    ```
    - `index.js` files imports and uses the module:
    
    ```
    var circle = require('./circle.js');
    
    console.log( 'The area of a circle of radius 4 is '+ circle.area(4));
    
    ```

2. **core modules** - create an http server with the [http module](http://nodejs.org/api/http.html)

    ```
    var http = require('http');

    var server = http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Hello World!');
      res.end();
    });
    
    server.listen(4000);
    
    console.log('Server running at localhost:4000');
    ```
    
    forgo the variable declarations and other shortcuts:
    
    ```
    require('http').createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World!'); // try: res.end(req.url);
    }).listen(4000);
    
    console.log('Server running at localhost:4000');
    ```
    
    or try with
    
    test it out!
    
    - `node filename.js` in the command line
    - open [localhost:4000](http:127.0.0.1:4000) in the browser
    - `curl localhost:4000` in another the command line
    - `curl -i localhost:4000` in another command line           
 ```

    
3. **external module**: [3rd party modules](https://github.com/joyent/node/wiki/modules) like [`connect`](https://github.com/senchalabs/connect) in file `server.js`. Install the `connect` module in the command line with `$ npm install connect`

    ```
    var connect = require('connect');

    connect.createServer(function(req, res) {
      res.end('Hello World in NodeJS!');
    }).listen(8080);
    ```
            
    1. try with embedded html tags:
    
        ```
        ...
        res.end('<h1>Hello World in NodeJS!');
        ...
        
        ```
    
    2. try with files `public/index.html` and `public/css/style.css` in the file `server.js`
        
        ```
        var connect = require("connect");

        connect(connect.static(__dirname + "/public")).listen(8000);
        ```
    
    
##4. event driven programming

1. explore 4 types of scheduling events:

    ```
    var repeat = setInterval(function() {
      console.log('Repeat!');
    }, 2000);
    
    var timeout = setTimeout(function() {
      console.log("Timeout in 4s");
    }, 4000);
    
    clearTimeout(repeat); // try with: clearTimeout(timeout); 
    
    console.log('Hello :)');
    ```

1. explore event loops with `process.nextTick`. Which gets execute first and why?

    1. plain console.log
    
        ```
        console.log('Before');
        console.log('After');
        ```
    
    1. with an infinite loop in between
    
        ```
        console.log('Before');
    
        var a = 0;
        while(true) {
          a ++;
        }
        
        console.log('After');
        ```

    1. with a task that will execute immediately after the main program
    
        ```
        console.log('Before');
    
        process.nextTick(function() {
          console.log("tick");
        });
        
        console.log('After');
        ```

    1. with 2 functions to execute after the main program
    
        ```
        console.log('Before');

        process.nextTick(function() {
          console.log("tick 1");
        });
        
        console.log('After');
        
        process.nextTick(function() {
          console.log("tick 2");
        });

        ```
        
     1. replace with an infinite loop…
     
         ```
         console.log('Before');

        process.nextTick(function() {
          console.log("tick 1");
        });
        
        console.log('After');
        
        process.nextTick(function() {
          console.log("tick 2");
        });

         ```
         
     1. use delayed functions…
      
        ```
        console.log('Before: ' + new Date().getSeconds());
        
        setTimeout(function() {
          console.log('Timeout in 2s: '+ new Date().getSeconds());
        }, 2000);
        
        process.nextTick(function() {
          console.log('tick 2 ' + new Date().getSeconds());
          setTimeout(function() {
            console.log('Timeout in 2s in next tick '+ new Date().getSeconds());
          }, 2000);
        });

          ```
1. child process

    1. execute a command line process
    
        ```
        var exec = require('child_process').exec;
        console.log('Before');
        exec('ls -al', function(err, stdout, stderr) {
          if (err) {
            console.log('child process exited with error code', err.code);
            return;
          }
          console.log(stdout);
        });
        console.log('After');
        ```

    1. execute another file from `parent.js`
    
        ```        
        var exec = require('child_process').exec;
        
        console.log('Before: ' + new Date().getSeconds() );
        
        exec('node child.js', function(err, stdout, stderr) {
            console.log('stdout:\n', stdout);
        });
        
        console.log('After: ' + new Date().getSeconds() );

        ```
        
        calling the file `child.js`
        
        ```
        setTimeout(function() {
          console.log("Timeout in 1s: " + new Date().getSeconds() );
        }, 1000);
        ```

##5. networking - a simple tcp chat

a simple tcp chat server based on Ryan Dahl's [TCP Chat server](http://www.youtube.com/watch?v=jo_B4LTHi3I)

```
var server = require('net').createServer(),
  sockets = [];

server.on('connection', function(socket) {

  console.log('got a new connection');
  sockets.push(socket);

  socket.on('data', function(data) {
    console.log('got data:', data);
    sockets.forEach(function(otherSocket) {

      if (otherSocket !== socket) { // prevents echo
        otherSocket.write(data);
      }
    });
  });

  socket.on('close', function() {
    console.log('connection closed');
    var index = sockets.indexOf(socket);
    sockets.splice(index, 1);
  });

});

server.on('error', function(err) {
  console.log('Server error:', err.message);
});

server.on('close', function() {
  console.log('Server closed');
});

server.listen(4001);
```

start the chat server in the command line with `node chat.js`

open a few connections in command line tabs with `nc localhost 4001`

#More Resources on Node 

1. [Node Beginner](http://www.nodebeginner.org/) book
1. [Professional Node](http://www.amazon.com/Professional-Node-js-Building-Javascript-Scalable/dp/1118185463) and [Node Tuts](http://nodetuts.com/) by Pedro
1. [Node Guide](http://nodeguide.com) by Felix
2. [ExpressJS](http://expressjs.com/) web application framework for Node



#Build Link of this episode

[Tech.pro](http://tech.pro/) for many web development tutorials