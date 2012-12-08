#Build Podcast Ep 24 - Heroku
[Screencast link](http://build-podcast.com/heroku/)

[Heroku](http://www.heroku.com/) is an online platform where we can easilu deploy and scale our applications. Whether we are looking to build an experimental app, or our app that we intend to scale up one day, Heroku is a great platform to get start with. In this episode, we will deploy our previous [Rails application](http://build-podcast.com/rails/) and explore some features!

#Background on Heroku

1. [Heroku main website](http://www.heroku.com/)
2. Heroku [documents](https://devcenter.heroku.com/), [addons](https://addons.heroku.com/), [labs](https://devcenter.heroku.com/articles/labs)

#Things to learn with Heroku

###1. setup heroku

1. signup for [heroku online](http://www.heroku.com/)
2. install [toolbelt](https://toolbelt.heroku.com/)
3. read through the [Getting Started with Heroku](sI929MrsI7g6)

###2. background on heroku

In the [heroku functions with the command line](https://devcenter.heroku.com/articles/using-the-cli):

1. `heroku --version` to check that heroku is installed
2. if there's an older version, do `heroku update` 
3. login with email and password: `heroku login`
4. if you want to use [ssh](http://build-podcast.com/ssh/) to login: 
    1. `ssh-keygen -t rsa -f heroku -C "sayanee@gmail.com"` to generate the public and private keys for heroku
    2. `heroku keys:add` to add the public key to heroku
    3. `heroku keys` to display all the SSH public keys
    4. `heroku keys:remove user@email.com` to remove a certain key
5. `heroku help` to get an overview of other commands
6. `heroku apps` to get an overview of all the apps or `heroku apps:info --app appname` to get more info about one particular app

###3. prep the rails app for production in heroku

1.  remove line `gem 'sqlite3'` in Gemfile and add the following instead so that postgres db is used in production at heroku:
    
    ```
    group :development do
    	gem 'sqlite3'
    end
    
    group :production do
      gem 'pg'
    end
    ```
2. inside file `app/config/environments/production.rb` change line assets compilation to true: 

    ```
   config.assets.compile = true
   ```

###4. initiate git repo
1. go to the rails app folder
2. `git init`, `git add .` and `git commit -m "initial commit"`
3. `rails s` to start the server locally, just to ensure that everything is fine in local environment
4. get more info about [heroku rails app deployment](https://devcenter.heroku.com/articles/rails3)

###5. Deploy a simple Rails app to Heroku

4. initiate heroku app `heroku create app-name` e.g. `heroku create todo-build-podcast` 
5. check with `git remote -v` or just `git remote`
5. `git push heroku master` and open the heroku app in app-name.heroku.com
6. play around with the app
7. `heroku db:pull` to sync the local database with the production database

###6. check heroku logs, add-ons, labs

1. `heroku logs` or the last number of logs with `heroku logs -n 200`
2. the logs will come in this format `timestamp source[process]: message`
3. check for additional [addons](https://addons.heroku.com/) or [heroku labs](https://devcenter.heroku.com/articles/labs)

    ```
    heroku addons:list # list all available
    heroku labs:list # list all available
    
    heroku addons # list all associated with the app
    ```


#More Resources on Deployment Platforms

1. [Amazon Web Services](http://aws.amazon.com/)
2. [AppFog](http://www.appfog.com/)
3. [Nodejitsu](http://nodejitsu.com/)
4. [Rails Playground](http://railsplayground.com/)

#Related Build Podcast episodes

- [Rails](http://build-podcast.com/rails/)
- [Git](http://build-podcast.com/git/) and [Github](http://build-podcast.com/github/)
- [Terminal and Command line](http://build-podcast.com/terminal/)
- [SSH](http://build-podcast.com/ssh/)

#Build Link of this Episode

[The Jargon Files](http://catb.org/jargon/html/index.html) with an amazing quote on [Red Wire](http://www.catb.org/jargon/html/R/red-wire.html) about hardware and software people.