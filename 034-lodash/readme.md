#Build Podcast Ep 34 - Lodash
[Screencast link](http://build-podcast.com/lodash/)

[Lodash](http://lodash.com/) is a utlity belt javascript library. It is also a hard dependancy for [Backbonejs](http://backbonejs.org/), as a drop-in replacement for [underscorejs](http://underscorejs.org/) with performance enhancement. In this episode we will create a simple project using some functions of lodash along with its micro templating features. We will also explore the custom build functions and source maps.

#Background on Lodash

1. [Main website](http://lodash.com/)
2. [Documentation](http://lodash.com/docs)
3. [Github](https://github.com/bestiejs/lodash/)
4. Uses: Drop-in replacement for [Underscorejs](http://underscorejs.org/), a dependancy for [Backbonejs](http://backbonejs.org/)


#Things to learn with Lodash

###1. link to lodash js file
1. link to lodash from the [cdnjs](http://cdnjs.com/) or get your [own copy](https://raw.github.com/bestiejs/lodash/v1.0.0/dist/lodash.min.js)

    ```
      <script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.0-rc.3/lodash.min.js"></script>

    ```
2. check in your console on the lodash functions available and its version:

    ```
    _.functions(_)
    _.VERSION
    
    ```
    
###2. Try out different lodash functions

1. For Arrays: `_.compact`, `_.object`
2. For Collections: `_.where`, `_.min`, `_.max`
3. For Objects: `_.functions`
4. For Utilities: `_.template` to create a template for markup and `_.templateSettings` to set the syntax

###3. Custom Builds

1. install npm package `sudo npm install -g lodash`
2. check the version `lodash --version`
3. custom build it 

    ```
    lodash include="compact, each, object, where, min, max, functions, templateSettings, template"
    ```
    


#More Resources on Lodash

1. [Underscorejs](http://underscorejs.org/)
2. [Mout](http://moutjs.com/)
3. [Say Hello to Lodash](http://kitcambridge.be/blog/say-hello-to-lo-dash/)
4. [Getting cosy with Underscore js](http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/)
5. [Introducing lodash](https://vimeo.com/44154599)
6. [Lodash for a better utility belt](http://www.youtube.com/watch?v=dpPy4f_SeEk)



#Build Link of this Episode

[Javascript Playground](http://www.javascriptplayground.com/blog) 