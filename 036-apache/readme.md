#Build Podcast Ep 36 - Apache
[Screencast link](http://build-podcast.com/apache/)

[Apache](http://httpd.apache.org/) is a popular open source http server that runs on many operating systems. We will go through some of the common config files and their settings on both Mac OSX and AWS EC2. Lastly, we will also go through what is the `.htaccess` file and some of its configurations.

#Background on Apache

1. [Main website](http://httpd.apache.org/)
1. [eBook for download](http://www.dedoimedo.com/computers/apache_book_part.html)
2. [Sublimetext Syntex highlighting for Apache conf](http://codrspace.com/eloyz/sublime-text-2-how-to-install-the-apache-syntax/)


#Things to learn with Apache

##1. install and config files

###on a mac osx

1. MAC OSX comes with a pre-installed Apache. Check it's version:

    ```
    httpd -v
    
    Server version: Apache/2.2.22 (Unix)
    Server built:   Aug 24 2012 17:16:58
    ``` 

3. Explore `httpd.conf` file contents:
    1. open the main configuration file with a text editor. it might be usually found in `/etc/httpd/conf/httpd.conf` as well.

        ```
        subl /private/etc/apache2/httpd.conf
        ```
    1. search for the following lines in the config file to learn about them from the surrounding comments:
    
        ```
        …
        ServerRoot
        …
        Listen
        …
        DocumentRoot
        ```
1. open the hosts file in a text editor. it might be also found in `/etc/hosts`:

    ```
    subl /private/etc/hosts
    ```
1. Change the Document Root:
    2. go to the `DocumentRoot` and create a simple `index.html`. start the apache server and visit [localhost](http://localhost) in the browser.
    
        ```
        sudo apachectl start
        ```
    1. change the `DocumentRoot` to another location with an index.html. Then stop and start the apache server
    
        ```
        …
        DocumentRoot "/Users/username/Desktop"
        …
        <Directory "/Users/username/Desktop">
        …  
        ```
1. Change the vhosts - allows you to run several websites from a single computer
    1. uncomment the line in the file `httpd.conf`:
    
        ```
        Include /private/etc/apache2/extra/httpd-vhosts.conf
        ```
    2. edit the `httpd-vhosts.conf` file
    
        ```
        <VirtualHost *:80>
          ServerName project.localhost
          DocumentRoot "/location/to/the/project"
          <Directory /location/to/the/project>
            AllowOverride All
            Order allow,deny
            Allow from all
          </Directory>
        </VirtualHost>
        ```
     3. include the name in the `hosts` file
     
     ```
     127.0.0.1     project.localhost
     ```

###on a linux distro (aws ec2)

1. create a new EC2 instance and ssh into the virtual server

    ```
    ssh -i mykey.pem ec2-user@[public-dns]
    ```
2. after getting inside the virtual server, install the apache server

    ```
    yum install httpd
    ``` 
3. explore the various files and folders by opening them up in a text editor, `nano` in this case

    ```
    nano /etc/httpd/conf/httpd.conf
    nano /etc/hosts
    ls -al /var/www/html
    
    ```

##2. .htaccess file

1. about `.htaccess`:
    - `.htaccess` code works in the `httpd.conf` file, but not all `httpd.conf` code works in `.htaccess` files
    - a directory level apache configuration file
    - used generally for speeding up website, debugging and security
1. simple rewrite url

    ```
    # simple rewrite
    RewriteEngine On
    RewriteRule ^about$ about.html
    ```
2. add custom error pages

    ```
    ErrorDocument 404 /404.html
    ```
1. expires headers

    ```
    <IfModule mod_expires.c>
      ExpiresActive on
      ExpiresDefault                          "access plus 1 month"
      ExpiresByType image/gif                 "access plus 1 month"
    </IfModule>
    ```
1. custom header

    ```
    Header set Join-Us "Looking for a job? Email us!"
    ```


#More Resources on Apache

1. [ultimate .htaccess](http://www.askapache.com/htaccess/htaccess.html)
1. [html5 boilerplate .htaccess](https://github.com/h5bp/html5-boilerplate/blob/master/.htaccess)
1. [intro to apache](http://net.tutsplus.com/tutorials/other/an-introduction-to-apache/)
1. [.htaccess doc](http://httpd.apache.org/docs/current/howto/htaccess.html)
1. [protect wordpress site htaccess](http://www.netmagazine.com/tutorials/protect-your-wordpress-site-htaccess)
1. [intro to .htaccess](http://codular.com/htaccess-introduction)
2. [.htaccess for SEO](http://www.seomoz.org/blog/htaccess-file-snippets-for-seos)
3. creative http headers and [4 ways to recruit developers](http://davidwalsh.name/creative-jobs)
4. [mamp](http://www.mamp.info/en/index.html) - Mac, Apache, MySQL, PHP 
 

#Related Build Podcast episodes

1. [local web servers](http://build-podcast.com/local-web-servers/)
2. [aws](http://build-podcast.com/aws/)



#Build Link of this Episode

[Codecademy](http://www.codecademy.com) - Learn to code interactively, for free