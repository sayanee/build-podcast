#Build Podcast Ep 16 - Yslow
[Screencast link ](http://build-podcast.com/yslow/)

[Yslow](http://yslow.org/) is a great guideline on how to make your websites load faster. We will explore most of the 23 guidelines from Yslow and implement them in a little project and have fun getting to know the history of processors!


#Tools used for Yslow:

1. [Yslow browser extensions](http://yslow.org/)
2. [PageSpeed](https://developers.google.com/speed/pagespeed/) by Google

#How to implement Yslow

1. [Minimize http requests](http://developer.yahoo.com/performance/rules.html#num_http)
    - [CSS Sprite Cow](#)
2. [Use a Content Delivery Network](http://developer.yahoo.com/performance/rules.html#cdn)
    - [Google CDN](https://developers.google.com/speed/libraries/devguide)
    - [CDNjs](http://cdnjs.com/)
3. [Avoid empty image src](http://developer.yahoo.com/performance/rules.html#emptysrc)
    - ensure the picture source exists in html `<img src="pic.jpg">`
4. [Add an Expires or a Cache-Control Header](http://developer.yahoo.com/performance/rules.html#expires)
    - [html5 boilerplate expires header](https://github.com/h5bp/html5-boilerplate/blob/master/.htaccess#L190)
5. [Gzip components](http://developer.yahoo.com/performance/rules.html#gzip)
    - [html5 boilerplate gzip compression](https://github.com/h5bp/html5-boilerplate/blob/master/.htaccess#L153)
6. [Put stylesheets at the top](http://developer.yahoo.com/performance/rules.html#css_top)
7. [Puts scripts at the bottom](http://developer.yahoo.com/performance/rules.html#js_bottom)
8. [Avoid CSS Expressions](http://developer.yahoo.com/performance/rules.html#css_expressions)
9. [Make JavaScript and CSS External](http://developer.yahoo.com/performance/rules.html#external)
    - link to one style.css
    - link to one script.js
10. Reduce DNS Lookup
11. [Minify JS and CSS](http://developer.yahoo.com/performance/rules.html#minify)
    - [CSS minifier](http://www.cssminifier.com/) and [JS minifier](http://fmarcia.info/jsmin/test.html)
    - requirejs
12. Avoid redirects
13. [Remove duplicate scripts](http://developer.yahoo.com/performance/rules.html#js_dupes)
14. ETags Removal
    - [from HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/.htaccess#L265)
15. Make Ajax Cacheable
16. Use GET for AJAX Requests
19. Reduce the Number of DOM Elements
22. No 404s
23. Reduce Cookie Size
    - [text your page](http://gtmetrix.com/reduce-cookie-size.html)
24. Use Cookie-free Domains for Components
28. Avoid Filters
29. Do Not Scale Images in HTML
    - [Photoshop](http://www.adobe.com/products/photoshop.html) or [Fireworks](http://www.adobe.com/products/fireworks.html) for image cropping/scaling
    - [ImageOptim](http://www.macupdate.com/app/mac/28766/imageoptim) 
30. Make favicon.ico Small and Cacheable


#More resources 

1. [html5 boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/.htaccess#L153)
2. [require.js](http://build-podcast.com/requirejs/)
3. [CSS Sprite Cow](http://www.spritecow.com/) and a [video tutorial](http://css-tricks.com/video-screencasts/105-using-spritecow/) by Chris Coyier
5. [Gruntjs](https://github.com/gruntjs/grunt/blob/master/docs/toc.md)
6. [SASS](http://sass-lang.com/) and [Stylus](http://learnboost.github.com/stylus/)
7. [Codekit](http://incident57.com/codekit/)
10. [tesxt page for reduced cookie size](http://gtmetrix.com/reduce-cookie-size.html)

#Related Episodes

1. [HTML5 Boilerplate](http://build-podcast.com/html5-boilerplate/)
2. [require.js](http://build-podcast.com/requirejs/)
3. [local web servers](http://build-podcast.com/014-local-web-servers/)

#Build Link of this Episode

[A Book Apart](http://www.abookapart.com/products/) by [Jeffrey Zeldman](http://twitter.com/zeldman) and [team](http://www.abookapart.com/pages/about)