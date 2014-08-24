---
title: 035 Capistrano
title_lowercase: 035 capistrano
layout: post
tags: tutorial, screencast, technology, development, capistrano, server, commands, github, git, deployment
description: Capistrano is remote multi-server automation tool that is often used for deployment. In this episode, we will first learn how to execute command line tasks in several servers, then we will deploy a Github repo on a newly fired up EC2 instance.
permalink: /capistrano/
enclosure: http://video.build-podcast.com/035-capistrano.mp4
length: 134501989
---

<div id="video"><iframe src="//player.vimeo.com/video/61887298" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>

[Capistrano](http://capistranorb.com/) is remote multi-server automation tool that is often used for deployment. In this episode, we will first learn how to execute command line tasks in several servers, then we will deploy a [github](https://github.com/) repo on a newly fired up [EC2](http://aws.amazon.com/ec2/) instance.

<p><strong>Download video</strong>: <a href="http://video.build-podcast.com/035-capistrano.mp4" download="build-podcast-035-capistrano.mp4">mp4</a></p>

**Sample code**: [Github](https://github.com/sayanee/build-podcast/tree/master/035-capistrano)

**Similar episodes**: [004 GIT](/git), [019 Bash](/bash/), [022 SSH](/ssh/),  [015 Github](/github), [033 AWS](/aws),

**Version**: 2.14.2 (For current Version 3, start with the [Readme](https://github.com/capistrano/capistrano/blob/master/README.md))

##Background on Capistrano

1. [Wiki](https://github.com/capistrano/capistrano/wiki), [Github](https://github.com/capistrano/capistrano)
2. [Capistrano tasks](https://github.com/capistrano/capistrano/wiki/Capistrano-Tasks)


##Things to learn with Capistrano

###1. install Capistrano

1. install [rubygem](http://rubygems.org/)

    ```
    gem -v
    2.0.0
    ```
2. install [capistrano gem](http://rubygems.org/gems/capistrano)

    ```
    gem install capistrano
    gem list capistrano

    *** LOCAL GEMS ***
    capistrano (2.14.2)
    ```
3. for all help commands run `cap -h`

###2. simple Capfile

1. We will SSH into our local machine - i know it's very meta, but it's simple (rather than setting up another remote machine or EC2, etc)!
2. Go to `System Preferences > Sharing > Check Remote Login` and take note of the SSH command e.g. `ssh sayanee@10.0.1.22` and the corresponding IP address `10.0.1.22`
3. Hosts can ofcourse be `www.example.com` or in this case our own local machine `10.0.1.22`
3. Create a file named `Capfile` with the following contents and run in the command line `cap list_files`:

    ```
    task :list_files, :hosts => "10.0.1.22" do
      run "ls"
    end
    ```
4. Let's add in a second task and run `cap whois_user` or `cap list_files`:

    ```
    task :whois_user, :hosts => "10.0.1.22" do
      run "echo $USER"
    end

    task :list_files, :hosts => "10.0.1.22" do
      run "ls"
    end
    ```
5. Specifying the host over and over again is not efficient

    ```
    role :libs, "10.0.1.22"

    task :whois_user do
      run "echo $USER"
    end

    task :list_files do
      run "ls"
    end

    ```
6. We can also specify, multiple-servers now. `cap whois_user` will be execute in both the servers!

    ```
    role :libs, "10.0.1.22", "www.example.com"

    task :whois_user do
      run "echo $USER"
    end

    task :list_files do
      run "ls"
    end

    ```

7. We can also specify different groups of hosts e.g. `analytics` and `information`:

    ```
    role :info, "10.0.1.22", "10.0.1.20"
    role :analytics, "10.0.1.22"

    task :whois_user, :roles => :info do
      run "echo $USER"
    end

    task :list_files, :roles => :info do
      run "ls"
    end

    task :show_free_space, :roles => :analytics do
      run "df -h /"
    end

    ```
8. `cap -T` command will give all the task list with descriptions
9. Include Task list with descriptions and then run `cap -T`:

    ```
    role :info, "10.0.1.22", "10.0.1.20"
    role :analytics, "10.0.1.22"

    desc "The Current Username"
    task :whois_user, :roles => :info do
      run "echo $USER"
    end

    desc "List Files in the home Directory"
    task :list_files, :roles => :info do
      run "ls"
    end

    desc "Show Free Spaces"
    task :show_free_space, :roles => :analytics do
      run "df -h /"
    end

    ```
10. Simultaneously run commands in all servers:

    ```
    cap invoke COMMAND="ls"
    ```



###2. deploy a simple `html` file with Github and AWS EC2

####1. Open a new Github Repo

1. Open a new github Repo

####2. Prepare a local project with git

1. Go to an empty folder for the project
2. Create a simple `index.html`
1. Initiate a git repository and push to github

    ```
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin git@[username]/[repo-name].git
    git push -u origin master
    ```

####3. Prepare a capistrano task

1. Go to the project folder and one level up in the command line (or anywhere you wish) to create the Capistrano task
1. run in the command line `capify .` and this will create:

    ```
    .
    |-- Capfile
    `-- config
        `-- deploy.rb
    ```
1. Include the [capistrano config](https://help.github.com/articles/deploying-with-capistrano) in file `deploy/config.rb`

    ```
    set :application, "cap-github-ec2"
    set :deploy_to, "/var/www/html"

    set :scm, :git
    set :repository, "git@github.com:chinee/hello-cap.git"
    set :scm_username, "sayanee"

    set :location, "ec2-54-234-17-185.compute-1.amazonaws.com"
    role :app, location
    role :web, location
    role :db,  location, :primary => true
    set :user, "ec2-user"
    ssh_options[:keys] = ["/Users/sayanee/.ssh/ec2.pem"]
    default_run_options[:pty] = true

    set :branch, 'master'
    set :scm_verbose, true
    ```

####4. Create an EC2 instance

1. Create a simple [ec2 instance](https://github.com/sayanee/Build-Podcast/tree/master/033-aws#1-elastic-cloud-compute-ec2-for-a-simple-indexhtml)

1. SSH login into EC2 instance with the `*.pem` file which has the correct permissions

    ```
    chmod 600 mykey.pem
    ssh -i mykey.pem ec2-user@[public-dns]
    ```
1. Install Git

    ```
    sudo yum install git
    ```
1. Install Apache Server

    ```
    sudo yum install httpd
    ```
1. Ensure that the default folder exisrs

    ```
    cd ../../var/www/html/
    ```
1. Start the Apache server and check its status

    ```
    sudo service httpd start
    sudo service httpd status
    ```
1. visit the *ec2 public dns* with the address[http://ec2-xx-xxx-xx-xxx.compute-1.amazonaws.com](#) and it should show a default Amazon Linux AMI Test Page


1. Create an SSH key pair and upload to github

    ```
    cd ~/.ssh
    ssh-keygen -t rsa -f [name] -C "[email]"
    ```
1. Create the SSH Config file

    ```
    touch ~/.ssh/config
    ```
1. Edit the `~/.ssh/config` using an editor such as `sudo nano ~/.ssh/config` file with the following contents:

   ```
   Hostname github.com
   IdentityFile ~/.ssh/[name]
   ```
1. Change permsissions for the config file

    ```
    chmod 600 ~/.ssh/config
    ```
1. copy the content of the public key:

    ```
    cat ~/.ssh/name.pub
    ```

1. Go back to the Github repo page and add SSH keys to `Github Repo > Setting > Deploy Keys` and paste in the contents of `~/.ssh/name.pub`

1. Test whether SSH into Github works

    ```
    ssh -T git@github.com
    ```
1. The project will be deployed to `/var/www/html` so ensure the permission is set to the current user

    ```
    cd /var/www/html
    sudo chown -R ec2-user:ec2-user .
    ```
1. By default capistrano will release the latest project into the folder `/var/www/[project-name]/current/public`, so we will need to tell the Apache server to point to it. Open the config file

     ```
    sudo nano /etc/httpd/conf/httpd.conf
    ```
1. Edit the lines to point to it

    ```
    …
    DocumentRoot "/var/www/html/current"
    …
    <Directory "/var/www/html/current/public">
    ```
1. Stop and restart the Apache server

    ```
    sudo service httpd stop
    sudo service httpd start
    ```

####5. Deploy using Capistrano and Github

1. Come back to the Local machine in the folder where the capistrano task is defined. Check everything is working!

    ```
    cap deploy:setup
    ```
1. Deploy from Github to EC2

    ```
    cap deploy
    ```
1. View the public DNS in the browser and it should show your simple `index.html` file!

##More Resources on Capistrano

1. [Deploying to a VPS with Capistrano](http://alexpearce.me/2012/07/deploying-to-a-vps-with-capistrano/)
1. [Capistrano Handbook](https://github.com/leehambley/capistrano-handbook/blob/master/index.markdown)
1. [How to deploy your web app using capistrano and ec2](http://blog.grio.com/2012/07/how-to-deploy-your-web-app-to-amazon-ec2-using-capistrano.html)
1. [Capistrano Tasks](https://github.com/capistrano/capistrano/wiki/Capistrano-Tasks)
##Build Link of this Episode

Access in Chrome browser: chrome://credits/
