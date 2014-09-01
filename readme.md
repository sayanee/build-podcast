[![Build Status](https://travis-ci.org/sayanee/build-podcast.png)](https://travis-ci.org/sayanee/build-podcast) [![Dependency Status](https://gemnasium.com/sayanee/build-podcast.svg)](https://gemnasium.com/sayanee/build-podcast)

####[Build Podcast](http://build-podcast.com) is a show about technology tools for design and development. Each episode, [Sayanee](http://sayan.ee) will be creating a screencast that will take you through step-by-step in using one tool to build a little project, all in the fun spirit of hacking, creating and building stuff!

Related links:

- [Main website](http://build-podcast.com)
- [Github pages](http://sayanee.github.io/build-podcast)
- [RSS Feed](http://feeds.feedburner.com/BuildPodcastVideos)
- [Youtube channel](http://www.youtube.com/playlist?list=PL9wSRifxQqRrLalGxTs-8FmfftbueLk5u)
- [Vimeo channel](https://vimeo.com/channels/441355)
- [iTunes subscriptionn](https://itunes.apple.com/us/podcast/build-podcast-screencast/id538677863)
- [Twitter](http://twitter.com/buildpodcast)
- [Github](https://github.com/sayanee/build-podcast) and [open issues](https://github.com/sayanee/build-podcast/issues?page=1&state=open)

##Development

This Github repository consists of sample code for each episode and the entire website for [Build Podcast](http://build-podcast.com).

When preparing the show notes in local machine, execute the following in the command line in git branch `master`:

   - **to build**:

     ```
     LANG="en_US.UTF-8" && LC_CTYPE="en_US.UTF-8" && jekyll build
     ```

   - **to add new posts**:  to start the [Jekyll](http://jekyllrb.com/) server with development configurations

     ```
     LANG="en_US.UTF-8" && LC_CTYPE="en_US.UTF-8" && jekyll serve --watch --config _dev_config.yml
     ```
   - **to edit css and javascript**: to start the [GruntJS](http://gruntjs.com/) continuous compilation for CSS and JavaScript

     ```
     grunt
     ```
   - **to sync to the github pages** change to git branch `gh-pages` and do a git rebase

     ```
     git checkout gh-pages
     git rebase master
     git push origin gh-pages
     git checkout master
     ```

If there's and error for invalid byte sequence in US-ASCII, try to reset the locale settings

```
LC_CTYPE="en_US.UTF-8"
LANG="en_US.UTF-8"
```
###install with docker

1. Install [Docker](https://docs.docker.com/) 
- Take note of `$DOCKER_HOST` IP address
- Edit `line 5` to replace `localhost` with `$DOCKER_HOST` IP address. E.g.

	```
	url: http://192.168.59.103:4000
	```
- Start docker E.g. for MAC OSX

	```
	boot2docker start
	export DOCKER_HOST=tcp://$(boot2docker ip 2>/dev/null):2375
	```	
- Build the image and run it

	```
	docker build -t bp .
	docker run -d -p 4000:4000 bp
	```
- Open in browser E.g. `http://192.168.59.103:4000`


##Test

1. [Download](http://docs.seleniumhq.org/download/) Selenium Webdriver `*.jar` file
1. Start the stand alone server

	```
	java -jar selenium-server-standalone-2.41.0.jar
	```
1. Start Jekyll server

	```
	LANG="en_US.UTF-8" && LC_CTYPE="en_US.UTF-8" && jekyll serve --watch --config _dev_config.yml
	```	
1. Run Mocha test

	```
	mocha
	```

##Automation

Automation with [scripts](/scripts):

1. Start a new episode: `bp new`
1. Open an existing episode: `bp open`
1. Record aa new episode: `bp record`
1. Publish a new episode: `bp pub`


##License

All content belongs to YOU under [CC0 1.0 Public Domain Dedication](http://creativecommons.org/publicdomain/zero/1.0/). You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.


##Donate

I buy eBooks, electronics and good chocolates for myself with the donated money :)

<a href='http://www.pledgie.com/campaigns/19089'><img alt='Click here to lend your support to: Build Podcast and make a donation at www.pledgie.com !' src='http://www.pledgie.com/campaigns/19089.png?skin_name=chrome' border='0' /></a>
