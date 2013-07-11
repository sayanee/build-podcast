#Build Podcast ep 047 - Styleguide

[Screencast link](http://build-podcast.com/styleguide/)

Automatic living styleguide helps to create styleguides from documentation in our CSS styles. We will explore 2 tools [KSS-Node](https://github.com/hughsk/kss-node) and [StyleDocco](http://jacobrask.github.io/styledocco/) with CSS and CSS pre-processor, SASS along with its plugin in [GruntJS](http://gruntjs.com/) build tool.

**Related episodes**: [005 Markdown](http://build-podcast.com/markdown/)
, [010 SASS](http://build-podcast.com/sass/), [021 GruntJS](http://build-podcast.com/gruntjs/)

#Background on Styleguide 

1. [Github Styleguide](https://github.com/styleguide/css)
1. Tools used:
    - [KSS](http://warpspire.com/kss/styleguides/) and its [specs](https://github.com/kneath/kss/blob/master/SPEC.md)
    - [KSS-Node](https://github.com/hughsk/kss-node) with [GruntJS](https://github.com/indieisaconcept/grunt-styleguide)
    - [StyleDocco](http://jacobrask.github.io/styledocco/) with [GruntJS](https://github.com/indieisaconcept/grunt-styleguide)


#Things to learn with Styleguide 

##1. prepare style.css

```
.button {
  background-color: #bbb;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
}

.button:hover {
  background-color: red;
}

.button:active {
  background-color: black;
}

.button.info {
  background-color: lightblue;
}

.button.curved {
  border-radius: 10px;
}

.button.rounded {
  border-radius: 50%;
}

p {
  color: #444;
}

p.warning {
  background-color: yellow;
}

p.error {
  background-color: red;
}

```



##(option A) with StyleDocco

1. install [StyleDocco](http://jacobrask.github.io/styledocco/)

    ```
    npm install -g styledocco
    ```

1. create a folder `css` with `readme.md` and `style.css`
1. `readme.md` contents

    ```
    #My project styleguide

    some styleguide notes!
    ```
1. insert comment above each style in `style.css` with Markdown format

    ```
    /*
      #Buttons
      Provides extra visual weight and identifies the primary action in a set of buttons.
    
        <button class="button">Button Element</button>
    */
    
    ...
    
    /*
      Button with info.
    
        <button class="button info">Button Info</button>
    */
    
    ...
    
    /*
      Button with curved.
    
        <button class="button curved">Button curved</button>
    */
    
    ...
    
    /*
      Button with rounded.
    
        <button class="button rounded">Button rounded</button>
    */
    
    ...
    
    /*
      #Paragraphs
      Some explanations
    
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, tempora!</p>
    */
    
    ...
    
    /*
      Explanation with warning.
    
        <p class="warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, tempora!</p>
    */
    
    ...
    
    /*
      Explanation with error.
    
        <p class="error">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, tempora!</p>
    */
    ```
1. generate the styleguide

    ```
    styledocco -n "My project" css -o styleguide --verbose
    ```
1. open file `styleguide/index.html` in the browser








##(option B) with KSS-Node

1. install [KSS-Node](https://github.com/hughsk/kss-node)

    ```
    npm install -g kss
    ```
    
1. command line options

    ```  
    kss-node
    ```

1. create a folder `css` with files `styleguide.md` and `style.css`
1. create `styleguide.md` to include some overview information on css

    ```
    #Hello styleguide
    
    Some information about the styleguide
    ```

1. insert comments inside `style.css`
    
    ```
    /*
    Buttons
    
    Buttons are action items for users.
    
    Markup:
    <a href="#" class="button {$modifiers}">Link Button</a>
    <button class="button {$modifiers}">Button Element</button>
    <input type="button" class="button {$modifiers}" value="Input Element"/>
    
    :hover               - Highlight the button when hovered.
    :active              - "Press" the button down when clicked.
    .info                - Indicate information
    
    Styleguide 1
    */
    
    ...
    
    
    /*
    Buttons corners
    
    Buttons can be as rounded as desired.
    
    Markup:
    <a href="#" class="button {$modifiers}">Link Button</a>
    <button class="button {$modifiers}">Button Element</button>
    <input type="button" class="button {$modifiers}" value="Input Element"/>
    
    .curved                - Indicate slightly rounded buttons
    .rounded               - Indicated circular buttons
    
    Styleguide 1.1
    */
    
    ...
    
    
    /*
    Paragraph
    
    Main typography across the pages
    
    Markup:
    <p class="{$modifiers}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, consectetur.</p>
    
    .warning               - Displays warning
    .error                 - Display error
    
    Styleguide 2
    */
    
   ...
    ```
        
1. create styleguide 
  
    ```
    kss-node [css-directory] [styleguide-directory] --[style-language] [input-file]
    kss-node css styleguide --css css/style.css
    ```

1. open file `styleguide/index.html` in the browser

###create styleguide template
1. create new template for the styleguide and a new folder `styleguide-template`

    ```
    kss-node --init
    ```
1. change some styles in the folder `styleguide-template`    
1. use the template to generate the styleguide

    ```
    kss-node css styleguide --css css/style.css --template [styleguide-template-directory]
    kss-node css styleguide --css css/style.css --template styleguide-template
    ```

##with a build tools, css preprocessor and kss

- build tools used: [GruntJS](http://gruntjs.com/plugins)
- css preprocessor used: [SASS](http://sass-lang.com/)
    - SCSS syntax for multi line comments
    - SASS syntax for styles
    
- styleguide: KSS-Node

----

1. create a new folder `project`
1. copy the folder kss styleguide template
1. create a folder `sass` with files `button.scss` and `paragraph.scss`
1. contents of `style.scss`

    ```
    @import "button.scss";
    @import "paragraph.scss"
    ```

1. create a file `package.json`

    ```
    {
      "name": "my-project",
      "version": "0.1.0",
      "dependencies": {},
      "devDependencies": {
        "grunt": "0.4.1",
        "grunt-contrib-clean": "0.4.1",
        "grunt-contrib-sass": "0.4.0",
        "grunt-contrib-copy": "0.4.1",
        "grunt-shell": "0.3.0"
      }
    }
    ```
1. create a file `.gitignore` with the following contents

    ```
    node_modules/*
    ```  

1. install all the modules as declared in `package.json`
    
    ```
    npm install
    ```  

1. create a file `Gruntfile.js` inside folder `project`

    ```
    module.exports = function(grunt) {

      grunt.initConfig({
    
        clean: {
          style: ['css', 'styleguide']
        },
        copy: {
          styleguide: {
            files: [
              { src: ['sass/styleguide.md'], dest: 'css/styleguide.md'}
            ]
          }
        },
        sass: {
          development: {
            options: {
              style: 'expanded'
            },
            files: {
              'css/style.doc.css': 'sass/style.scss'
            }
          },
          production: {
            options: {
              style: 'compressed'
            },
            files: {
              'css/style.css': 'sass/style.scss'
            }
          }
        },
        shell: {
          styleguide: {
              command: 'kss-node css styleguide --css css/style.doc.css --template styleguide-template'
          }
        }
      });
    
      grunt.loadNpmTasks('grunt-contrib-clean');
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-contrib-copy');
      grunt.loadNpmTasks('grunt-shell');
    
      grunt.registerTask('default', ['clean', 'sass', 'copy','shell']);
    
    };
    ```

1. execute command

    ```
    grunt
    ```
1. see the following files created:

    - `css/style.doc.css` with expanded format styles and documentation in comments
    - `css/style.css` with minified styles 
    - `styleguide/index.html` for the complete styleguide  
   
 


#More Resources on Styleguide 

1. Other tools: [Kalei Styleguide](http://kaleistyleguide.com/) and [Hologram](http://trulia.github.io/hologram/)
1. [Create styleguides with KSS and Styledocco](http://artminister.com/blog/generate-styleguides-kss-styledocco) 
1. [Creating livint style guides to improve performance](http://www.stubbornella.org/content/2013/06/05/creating-living-style-guides-to-improve-performance/)

#Credits

Thanks to everyone who responded to my tweet: [any ideas for creating automated living style](https://twitter.com/sayanee_/status/347302076168151040)



#Build Link of this episode
[The Mother of all Demos](https://www.youtube.com/watch?v=JfIgzSoTMOs) by Douglas Engelbart