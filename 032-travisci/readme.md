#Build Podcast Ep 32 - Travis CI
[Screencast link](http://build-podcast.com/travisci/)

[Travis CI](https://travis-ci.org/) is a hosted continuous integration platform fre for open source. In this episode, we will create 3 hello world projects on [Sinatra](http://www.sinatrarb.com/) ([Ruby](http://www.ruby-lang.org/en/)), [Flask](http://flask.pocoo.org/) ([Python](http://www.python.org/)) and [Node](http://nodejs.org/) (JavaScript) and see how we can use Github and Travis CI for easy continuous integration.

#Background on Travis CI

1. Travis: [Main Website](https://travis-ci.org/), [Documentation](http://about.travis-ci.org/docs/), [Blog](http://about.travis-ci.org/blog/), [Twitter](http://twitter.com/travisci)
2. Continuous Integration: [Wikipedia](http://en.wikipedia.org/wiki/Continuous_integration), [Martin Fowler](http://martinfowler.com/articles/continuousIntegration.html)


#Things to learn with Travis CI

###1. Start a simple Travis CI + Sinatra(Ruby)

1. create a new file `hello.rb`

    ```
    require 'sinatra'

    get '/' do
      "Hello World in Ruby, Sinatra!"
    end
    ```
2. include a new file `.travis.yml`

    ```
    language: ruby
    rvm:
      - "1.9.3"
    gemfile: Gemfile.ci
    ```
3. create a `Rakefile` with at least one default task

    ```
    require 'rake'

    task :default do
      puts "Hello World!"
    end
    ```
4. create a `Gemfile.ci` that the travis will use

   ```
   source 'http://rubygems.org'
   gem 'sinatra'
   gem 'rake'
   ```
5. create github repo and `git push` to github
6. Sign in to [travis](https://travis-ci.org/)
7. Go to [travis profile page](https://travis-ci.org/profile) and turn on the newly listed repo
8. Copy the Travis Token from [Profile](https://travis-ci.org/profile) > Profile Tab > Token
8. In Github go to the Repo Settings > Service Hooks > Travis > Check Active + Insert Token > Test Hook + Update Settings
9. Create the `readme.md` file or make any other minor changes to push to github once again

###2. Start a simple Travis CI + Flask(Python)

1. create a new file `hello.py`

    ```
    from flask import Flask
    app = Flask(__name__)


    @app.route("/")
    def hello():
        return "Hello in Flask, Python!"

    if __name__ == "__main__":
        app.run()

    ```
1. include a new file `.travis.yml`

    ```
    language: python
    python:
      - "2.7"
    install: "pip install -r requirements.txt --use-mirrors"
    script:
      - python setup.py test
    ```
2. create a `setup.py`

    ```
    from setuptools import setup, find_packages

    setup(
        name='Hello',
        version='1.0',
        long_description=__doc__,
        packages=find_packages(),
        include_package_data=True,
        zip_safe=False,
        install_requires=['Flask']
    )
    ```
3. create a `requirements.txt` that the travis will use

   ```
   Flask==0.9
   ```
4. Same as Step 5 to Step 10 for Sinatra(Ruby)

###3. Start a simple Travis CI + Node(JavaScript)

1. create a new file `hello.js`

    ```
    var http = require('http');

    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World in Node!\n');
    }).listen(1337, '127.0.0.1');

    console.log('Server running at http://127.0.0.1:1337/');
    ```
1. include a new file `.travis.yml`

    ```
    language: node_js
    node_js:
      - 0.8

    ```
2. create a `grunt.js` with just one task for linting

    ```
    module.exports = function(grunt) {

      grunt.initConfig({
        lint: {
          files: ['hello.js']
        }
      });

      grunt.registerTask('default', 'lint');
      grunt.registerTask('travis', 'lint');

    };
    ```
3. create a `package.json` that the travis will use

   ```
   {
      "name": "hello-node",
      "description": "A demo for nodejs travis and grunt",
      "author": "sayanee <sayanee@gmail.com>",
      "version": "0.0.1",
      "devDependencies": {
        "grunt": "~0.3.17"
      },
      "scripts": {
        "test": "grunt travis --verbose"
      }
    }
   ```
4. Same as Step 5 to Step 10 for Sinatra(Ruby)


#More Resources on Travis CI


1. [Browser Extension](http://about.travis-ci.org/docs/user/browser-extensions/)
2. [Notification](http://about.travis-ci.org/docs/user/notifications/)
1. [Status Image](http://about.travis-ci.org/docs/user/status-images/) [[cache issue](https://github.com/travis-ci/travis-ci/issues/822) just incase it doesn't update]
2. [Travis CI + PHP + Composer](http://www.youtube.com/watch?v=PQsXHZ6PLY4) screencast
3. [Travis CI Slides](http://www.slideshare.net/zupo/travis-ci-fun-and-easy-ci-for-your-plone-packages)
4. [Command Line Client](http://about.travis-ci.org/blog/2013-01-14-new-client/)


#Related Build Podcast episodes

- [git](http://build-podcast.com/git/)
- [github](http://build-podcast.com/github/)
- [gruntjs](http://build-podcast.com/grunt/)


#Build Link of this Episode

[FripFrap](http://fripfrap.io/) a frontend banter in 30mins or less by [Divya](http://twitter.com/divya) and [Garann](https://twitter.com/garannm).