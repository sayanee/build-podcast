#Build Podcast Ep 14 - Local Web Servers
[Screencast link ](http://build-podcast.com/local-web-servers/)

We often want to test and develop our applications locally. Here we will learn how to setup local web servers with some simple configurations in 3 ways: (1) built-in MAC [Apache](http://httpd.apache.org/) (2) [MAMP](http://www.mamp.info/en/index.html) with [Wordpress](http://wordpress.org/) installation (3) Nginx.


##Tools used for Local Web Servers:

1. Web Servers: [Apache](http://httpd.apache.org/) or [Nginx](http://nginx.org/)
2. [MAMP](http://www.mamp.info/en/index.html), WAMP for [XAMPP](http://www.apachefriends.org/en/xampp.html)

##Steps to setup local web servers

####1. Setup the MAC OSX's built-in Apache Web Server

1. Check apache installation in MAC with the command line `apachectl -V` and locate apache program file path with `which apachectl`
1. Edit the host file located at `/private/etc/hosts` with the line `127.0.0.1    dev.yourdomainname`
2. Edit the virtual hosts configuration file located at `/private/etc/apache2/extra/httpd-vhosts.conf` with the code [amend the file path accordingly]:

```
<VirtualHost *:80>
  ServerName dev.yourdomainname
  DocumentRoot "/Users/username/Sites/path/to/project"
  <Directory /Users/username/Sites/path/to/project>
    AllowOverride All
    Order allow,deny
    Allow from all
  </Directory>
</VirtualHost>
```
3. Ensure line `Include /private/etc/apache2/extra/httpd-vhosts.conf
` is uncommented in the file `/private/etc/apache2/httpd.conf`
4. Start MAC's built-in Apache web server in either of the 2 ways:
    1. In terminal, put in the command `sudo apachectl start`, OR
    2. System Preferences > Sharing > Web Sharing > Check
5. Visit the local website on the browser
6. Stop apache servers with `sudo apachectl stop` or restart with `sudo apachectl restart`

####2. Setup the MAMP and install Wordpress locally

1. Download [MAMP](http://www.mamp.info/en/index.html)
2. Edit the host file located at `/private/etc/hosts` with the line `127.0.0.1    dev.yourdomainname`
3. Edit the virtual hosts configuration file located at `/Applications/MAMP/conf/apache/extra/httpd-vhosts.conf` with the code [amend the file path accordingly]:

```
<VirtualHost *:80>
  ServerName dev.yourdomainname
  DocumentRoot "/Users/username/Sites/path/to/project"
  <Directory /Users/username/Sites/path/to/project>
    AllowOverride All
    Order allow,deny
    Allow from all
  </Directory>
</VirtualHost>
```
4. Ensure line to include `httpd-vhosts.conf`is uncommented in the file `/Applications/MAMP/conf/apache/httpd.conf`
5. Start MAMP Servers
6. Download [Wordpress](http://wordpress.org/) in the project folder
7. Go to [localhost/phpMyAdmin/](http://localhost/phpMyAdmin/) and create a Database
8. Edit `wp-config.php` file with the following lines:

```
define('DB_NAME', 'wordpress_yourDBname');
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');
define('DB_HOST', 'localhost');
```
9. Visit the local webpage on the browser and follow the instructions for the wordpress setup locally
10. Stop MAMP servers form the MAMP Interface

####3. Setup the Nginx

1. Check that nginx has been install with the command line in Terminal: `nginx -v` and locate apache program file path with `which nginx`
2. Edit the host file located at `/private/etc/hosts` with the line `127.0.0.1    dev.yourdomainname`
3. Edit the nginx configuration file located at `/opt/local/etc/nginx/nginx.conf` (or another location depending on the installation) with the following code inside the http code block:

```
server {
        listen          80;
        server_name     dev.yourdomain;
        root            /Users/username/Sites/path/to/project;
        index           index.html;
        expires         epoch;
    }
```
4. Start ngingx servers with the command line in Terminal: `sudo nginx`
5. Stop nginx servers with `sudo nginx -s stop`



#More Resources on Web Servers

1. What is a [web server](http://en.wikipedia.org/wiki/Web_server)?
2. [Common](http://royal.pingdom.com/2012/05/22/75-percent-top-10k-websites-served-by-open-source-software/) web servers include: [Apache](http://httpd.apache.org/), [Nginx](http://nginx.org/), [IIS](http://www.iis.net/), Google Web Server, [Lighttpd](http://www.lighttpd.net/)
2. For Apache:
    1. [Documentation](http://httpd.apache.org/docs/)
    2. Examples of [vhost configuration files](http://httpd.apache.org/docs/2.2/vhosts/)
    3. Setup MAC [Mountain Lion's built in Apache, PHP](http://damianoferrari.com/set-up-apache-and-php-on-os-x-10-8-mountain-lion/)
3. Show your [localhost to the world](http://progrium.com/localtunnel/): Localtunnel

#Build Link of this Episode

[Cooper Press Email newsletters for software developers](https://cooperpress.com/) by [Peter Cooper](http://peterc.org/) [[@peterc](https://twitter.com/peterc)]