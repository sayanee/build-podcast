#Build Podcast Ep 37 - Jekyll
[Screencast link](http://build-podcast.com/jekyll/)

[Jekyll](http://jekyllrb.com/) is a blog-aware, static site generator in Ruby. In this episode, we will install jekyll, setup a new blog and do some configurations as well as importing posts from a previous [Wordpress](http://wordpress.org) and even hosting it on Github Pages.

version: `jekyll 1.0.0.beta2`

#Background on Jekyll

1. [Main website](http://jekyllrb.com/)
2. [Github](https://github.com/mojombo/jekyll)
3. [Wiki](https://github.com/mojombo/jekyll/wiki)
4. [Jekyll with Github pages](https://help.github.com/articles/using-jekyll-with-pages)



#Things to learn with Jekyll

##1. install 

1. check pre-requisites:

    ```
    ruby --version
    gem --version
    ```


1. we will install the beta version with the pre-requisite of [rubygems](http://rubygems.org/gems/jekyll):

    ```
    gem install jekyll --pre
    jekyll --version
    ```
1. common commands for jekyll

    ```
    jekyll --help
    ```

##2. new site + deploy to github pages

1. create a new site

    ```
    mkdir github-username.github.com
    jekyll new github-username.github.com
    cd github-username.github.com
    ```

1. view the blog locally in [localhost:4000](http://localhost:4000)

    ```
    jekyll serve
    ```
1. create a git repository

    ```
    git init
    git add .
    git commit -m "initial commit"
    ```
1. create a [new github repository](https://github.com/new) in the name `github-username.github.com`

    ```
    git remote add origin git@github.com:username/repo.git
    git push -u origin master
    ```
3. visit `http://username.github.com`

##3. config

1. checkout some [configurations](https://github.com/mojombo/jekyll/wiki/Configuration) and edit file `_config.yml` accordingly
1. permalinks with pretty urls that can be configured 

    ```
    permalink: /:title
    ```
1. maximum number of posts

    ```
    limit_posts: 1
    ```
    
1. change destination folder name

    ```
    destination: ./_publish
    ```
    
##4. new post

1. create a new markdown file inside folder `_posts` with the name `yyyy-mm-dd-title.md`
2. restart the jekyll server

##5. import from wordpress

1. using the [wordpress plugin for jekyll export](https://github.com/benbalter/wordpress-to-jekyll-exporter)
2. upload the zip file to your wordpress blog as a plugin
3. activate the plugin
4. in the wordpress blog admin, go to `Tools > Export to Jekyll`
5. copy the markdown files from the `_posts` folder in the exported blog to the newer blog's `_posts` folder
6. restart the jekyll blog with `jekyll serve` locally to check everything is working. if there's and error for **invalid byte sequence in US-ASCII**, try to [reset the locale settings](https://github.com/imathis/octopress/issues/144#issuecomment-3636975)

    ```
    LC_CTYPE="en_US.UTF-8"
    LANG="en_US.UTF-8"
    ```

##6. pagination

1. refer to the [pagination document](https://github.com/mojombo/jekyll/wiki/Pagination)
2. edit `_config.yml`

    ```
    paginate: 10
    ```
3. edit file `index.html` according to [pagination](https://github.com/mojombo/jekyll/wiki/Pagination#indexhtml)
4. solve the `/page1` error with another [code reference](https://github.com/mojombo/jekyll/wiki/Pagination#a-note-about-page1) 

##6. plugins - sitemap generator

1. create a folder called `_plugins` with a file called `sitemap_generator.rb` with the [code contents](http://www.kinnetica.com/projects/jekyll-sitemap-generator/)
2. edit the file `sitemap_generator.rb` with the relvant information such as URL, etc.
2. do a `jekyll serve` to check `sitemap.xml` has been created

##7. rss

1. create a new file called `feed.xml` with [the following code](https://github.com/coyled/coyled.com/blob/master/atom.xml), replacing the necessary urls
2. enable rss [auto-discovery](http://www.rssboard.org/rss-autodiscovery) with the `link` tag in the default template file inside the `<head>` tag

    ```
    <link rel="alternate" type="application/rss+xml" title="RSS Feed for mysite.com" href="/rss.xml" />
    ```

##8. custom domain

1. by default, with github pages, the site will be served on `username.github.com`
2. for custom domain, add a file called `CNAME` and put in the domain name, example `build-podcast.com`

#More Resources on Jekyll

1.  [jekyll bootstrap](http://jekyllbootstrap.com/)
2.  [octopress](http://octopress.org/)
 

#Related Build Podcast episodes

1. [git](http://build-podcast.com/git/) and [github](http://build-podcast.com/github/)
2. [nanoc](http://build-podcast.com/nanoc/) another static site generator



#Build Link of this Episode

[code school](http://www.codeschool.com/) - Code School teaches web technologies in the comfort of your browser with video lessons, coding challenges, and screencasts.