#Build Podcast Ep 13 - Require.js
[Screencast link ](http://build-podcast.com/requirejs/)

[Require.js](http://requirejs.org/) is a JavaScript file and module loader. A modular approach can improve the speed and quality of our code. In this episode, we will use requirejs to combine a page containing a js library and 3 plugins from a previous episode.


##Tools used for Require.js:

1. [Sublime Text Editor](http://www.sublimetext.com/)
2. [Require.js](http://requirejs.org/) and its [API](http://requirejs.org/docs/api.html)
3. Chrome Developer Tools: [Network Panel](https://developers.google.com/chrome-developer-tools/docs/network)

##Steps to integrate Require.js into your project

###Setup the MAC OSX Apache Web Server

1. Open the project file, `index.html` with web server and view [space.localhost](http://space.localhost/) in the browser
2. Move the project folder to MAC OSX Sites folder
2. Start MAC OCX's built-in Apache Web Server by opening System Preferences > Sharing > check Web Sharing
3. Edit the hosts file located at `/private/etc/hosts` with the line `127.0.0.1     space.localhost`
4. Ensure line `Include /private/etc/apache2/extra/httpd-vhosts.conf
` is uncommented in the file `/private/etc/apache2/httpd.conf`
4. Edit the vhosts file located at `/private/etc/apache2/extra/httpd-vhosts.conf` with the code [amend the file path accordingly]:

```
<VirtualHost *:80>
  ServerName space.localhost
  DocumentRoot "/Users/username/Sites/space-exploration"
  <Directory /Users/username/Sites/space-exploration>
    AllowOverride All
    Order allow,deny
    Allow from all
  </Directory>
</VirtualHost>
```
View [space.localhost](http://space.localhost/) in the browser

###Steps to integrate require.js

1. Download [require.js](http://requirejs.org/docs/download.html#requirejs) file in the `js` folder
3. Remove all inline script tags calling individual javascript files and instead use `<script type="text/javascript" src="js/require.js" data-main="js/config"></script>` in the `head` tag.
4. Create `config.js` and `main.js` and edit them accordingly


##More Resources on Require.js

1. What is [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)?
2. [Writing Modular JavaScript With AMD, CommonJS & ES Harmony](http://addyosmani.com/writing-modular-js/) by Addy Osmani
3. [How to structure your app using require.js](http://nixtu.blogspot.sg/2011/02/how-to-structure-your-application-using.html)
4. [Modular Javascript](http://unscriptable.com/code/Using-AMD-loaders/#0)
4. require.js 3 part series screencast by Cary Landholt
    5. [basics part 1](http://www.youtube.com/watch?v=VGlDR1QiV3A)
    1. [basics part 2](http://www.youtube.com/watch?v=9BYBNPvcqwo)
    2. [optimizer](http://www.youtube.com/watch?v=m6VNhqKDM4E)
4. Other example [for your script loading needs](https://net.tutsplus.com/articles/web-roundups/for-your-script-loading-needs/)

##Build Link of this Episode

[jQuery Fundamentals](http://jqfundamentals.com/) by [Jessica Murphey](http://rmurphey.com/)

####Thanks to [Sebastiaan](http://twitter.com/sebdeckers) and [Thomas](http://twitter.com/serrynaimo) for require.js code advice
