#Build Podcast Ep 25 - Modernizr
[Screencast link](http://build-podcast.com/modernizr/)

[Modernizr](http://modernizr.com/) is a library for detecting whether the user's browsers have certain features and based on the availability, we developers will trigger certain functions or styles. In this episode, we will take a simple slideshow and use both javascript and css3 to make the transitions based on features available with libraries such as [yepnope](http://yepnopejs.com/) and [html5shiv](https://github.com/aFarkas/html5shiv). Most importantly, we will scratch the surface of what is [graceful degradation](http://en.wikipedia.org/wiki/Graceful_degradation) and [progressive enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement).

#Background on Modernizr and Tools

1. [Modernizr](http://modernizr.com/) and [documentation](http://modernizr.com/docs/)
2. [Understand Progressive Enhancement](http://www.alistapart.com/articles/understandingprogressiveenhancement/) and [wikipedia page](http://en.wikipedia.org/wiki/Progressive_enhancement)
3. [Graceful degradation](http://en.wikipedia.org/wiki/Graceful_degradation)
4. meanings of [shim](http://en.wikipedia.org/wiki/Shim_(computing)) (or shiv) and [polyfill](http://remysharp.com/2010/10/08/what-is-a-polyfill/) - use with [html5shiv](http://paulirish.com/2011/the-history-of-the-html5-shiv/)
5. [Lynkx](http://lynx.isc.org/) - text-only www browser: [Can we visit top websites with Lynx](http://royal.pingdom.com/2012/06/25/using-web-browser-lynx-visit-top-websites/)?
4. [deCSS3 bookmarklet](http://davatron5000.github.com/deCSS3/)
5. [html5 shim](http://code.google.com/p/html5shiv/)
6. [yepnope.js](http://yepnopejs.com/)
7. [haz.io](http://haz.io/) - quick overview of your browser’s support for various features

#Resources on building the episode project

1. [Responsive slides](http://responsive-slides.viljamis.com/) jQuery plugin
2. [Pure CSS3 Cycling Slideshow](http://coding.smashingmagazine.com/2012/04/25/pure-css3-cycling-slideshow/)
3. [Single Board Computers](http://en.wikipedia.org/wiki/Single-board_computer): [Arduino](http://www.arduino.cc/), [RasberryPI](http://www.raspberrypi.org/), [Beagle Board](http://beagleboard.org/), [Panda Board](http://pandaboard.org/)


#Things to learn with Modernizr

###1. installing modernizr

1. download the entire library from [modernizr](http://modernizr.com/download/) or [cdnjs](http://cdnjs.com/) and put a `<script>` tag in the `<head>` of `index.html`. Open up the browser dev console to see some classes added to the `<head>` tag:
    
    ```
    <html lang="en" style="" class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths"><head>
    ```
2. you can also [choose which features you want to detect](http://modernizr.com/download/) and put the generate code inside the `<head>` tag as well

###2. feature detection

1. **CSS:**
    - if a css property is not available:

        ```
        .box{
          box-shadow: 0 0 10px 1px #666;
        }
        .no-boxshadow .box{
          border: 3px solid grey;
        }
        ```
    - if a css property is available:

        ```
        .box{
          border: 3px solid grey;
        }
        .boxshadow .box{
          box-shadow: 0 0 10px 1px #666;
        }
        ```

    -  use [deCSS3 bookmarklet](http://davatron5000.github.com/deCSS3/) to easily test for with or without css3 - open up web dev console and copy the desired class needed from the `<html>`
3. **html5 tags:**
    - include the option for html5shiv when generating the [modernizr](http://modernizr.com/download/)
    - now semantic html5 tags are easily seen in older browser as well
    - if the entire html5shiv library is not needed, then [create the html5 element indivudally](http://net.tutsplus.com/tutorials/html-css-techniques/how-to-make-all-browsers-render-html5-mark-up-correctly-even-ie6/) and put the javascript in the `<head>` tags
4. **javascript fallback:**
    - for a javascript fallback, use [yepnope.js](http://yepnopejs.com/) - ensure it is part of the [generated modernizr](http://modernizr.com/download/) as well. Put the scripts in the `<head>` tag.
    
    ```
    <script>
        yepnope({
            test : Modernizr.cssanimations,
            yep  : 'slides.css',
            nope : 'slides.js'
        });
    </script>
    ```
    
#More Resources on Modernizr & Feature detection
1. [Beginner and Designers Guide to using Modernize to solve cross browser challenges](http://benfrain.com/beginner-and-designers-guide-to-using-modernizr-to-solve-cross-browser-challenges/)
2. [Start your project right with Modernizr](http://www.netmagazine.com/tutorials/start-your-project-right-modernizr)
3. [create the html5 element indivudally](http://net.tutsplus.com/tutorials/html-css-techniques/how-to-make-all-browsers-render-html5-mark-up-correctly-even-ie6/)

#Related Build Podcast episodes

- [gruntjs](http://build-podcast.com/gruntjs/) - to integrate [grunt-modernizr](https://github.com/doctyper/grunt-modernizr)
- [virtualbox](http://build-podcast.com/virtualbox/) - to run Windows 8 (for IE10 browser that can simulate older browsers) or other Linux distributions.
- [SASS](http://build-podcast.com/sass/) - use css preprocessor to generate the vendor prefixes automatically

#Build Link of this Episode

[The Big Web Show](http://5by5.tv/bigwebshow) hosted by [Jeffrey Zeldman](http://zeldman.com/).