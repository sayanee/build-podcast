---
title: 042 BackboneJS
title_lowercase: 042 backbonejs
layout: post
tags: tutorial, screencast, technology, development, javascript, client-side, framework, mvc, backbonejs
description: BackboneJS is a client-side MV* framework that will help us structure our code, provide templates to inject the data as well as render a fast changes UI with ajax. In this episode we will create a simple client-side reading list of computing books!
permalink: /backbonejs/
enclosure: http://video.build-podcast.com/042-backbonejs.mp4
length: 162744767
---

<div id="video"><iframe src="//player.vimeo.com/video/65965899" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>

[BackboneJS](http://backbonejs.org/) is a client-side MV* framework that will help us structure our code, provide templates to inject the data as well as render a fast changes UI with ajax. In this episode we will create a simple client-side reading list of computing books!

**Download video**: [mp4](http://video.build-podcast.com/042-backbonejs.mp4)

**Sample code**: [Github](https://github.com/sayanee/build-podcast/tree/master/042-backbonejs)

**Version**: 1.0.0

**Similar episodes**: [013 RequireJS](/requirejs), [034 Lodash](/lodash)

##Background on BackboneJS

1. [Main website](http://backbonejs.org/)
1. [Github](https://github.com/documentcloud/backbone)
1. [Backbone Fundamental](http://addyosmani.github.io/backbone-fundamentals/)
2. [Ajax - New appraoch to web applications](http://www.adaptivepath.com/ideas/ajax-new-approach-web-applications)
3. [TodoMVC](http://todomvc.com/)
1. [Sublime text pluging - backbone js snippets](https://github.com/tomasztunik/Sublime-Text-2-Backbone.js-package)


##Things to learn with BackboneJS

###1. install

1. BackboneJS has one hard dependancy, UnderscoreJS and we will also include jQuery for any DOM manipulation. Let's first create the bare `index.html` file. Open the console in the browser and query for `$` for jQuery, `_` for underscore and `Backbone` for backbone.

    ```
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>My Todo List</title>
    </head>
    <body>

      <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
      <script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js"></script>
      <script src="http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js"></script>

      <script>
        // my code
      </script>

    </body>
    </html>
    ```

1. create a simple class within the `script` tags without Backbone:

    ```
    var Read = function(config) {
      this.author = config.author;
      this.cover = config.cover;
    };

    Read.prototype.display = function() {
      return this.title + ' by ' + this.author;
    };

    ```

    try them out in the console:

    ```
    var read = new Read({title: 'Code Complete', author: 'Steve McConnell'});
    read.title;
    read.author;
    read.display();
    ```

##2. models

1.  **create new model**: delete the `script` contents and refer to `<script src="js/models/read.js"></script>` with the contents in file `js/models/read.js`
2.  **start** a new model:

    ```
    var app = app || {};

    app.Read = Backbone.Model.extend({
      // all function henceforth will be inside here
    });

    ```
1. **initialize**

    ```
    initialize: function() {
      console.log('New book to read is added to the reading list!');
    }
    ```

1. **custom function**

    ```
    display: function() {
       return this.title + ' by ' + this.author;
    }
    ```
1. **on change**

    ```
    initialize: function() {
        ...
        this.on('change:title', function(model){
            var title = model.get('title');
            console.log('Happy reading ' + title + ' !' );
        });

    }
    ```

1. **defaults**

    ```
    defaults: {
        cover: 'img/placeholder.png',
        title: 'No title',
        author: 'Unknown'
    }
    ```

   try them out in the browser console:

    ```
    var read2 = new app.Read({title: 'Mythical Man-Month', author: 'Frederick Brooks'});

    read2.get('title'); // 'Mythical Man-Month'
    read2.get('author'); // 'Frederick Brooks'

    read2.set('title', 'Pragmatic Programmer');
    read2.set('author', 'Andrew Hunt and David Thomas');

    read2.get('title'); // "Pragmatic Programmer"
    read2.get('author'); // "Andrew Hunt and David Thomas"
    ```

1. **validate** in file `js/models/read.js`

    ```
    // after display function
    validate: function(attrs, options) {
        if (attrs.title === '') {
            return 'Title of the book cannot be blank';
        }
    }

    ```
    try in the browser console:

    ```
    var read = new app.Read();
    read.get('title'); // "No title"

    read.set('title', '', {validate: true}); // false
    read.get('title'); // "No title"

    read.set('title', 'Pragmatic Programmer', {validate: true});
    read.get('title'); // "Pragmatic Programmer"

    ```
1. create a file `js/app.js` for all initializations and add `<script src="js/app.js"></script>` to file `index.html`:

    ```
    var read1 = new app.Read({ title: 'Mythical Man-Month', author: 'Frederick Brooks' }),
        read2 = new app.Read({ title: 'Pragmatic Programmer', author: 'Andrew Hunt and David Thomas' });

    ```

##3. views and templates

1. **start** a read view in file `js/views/read.js`:

    ```
    var app = app || {};

    app.ReadView = Backbone.View.extend({
        // book view
    });
    ```

    try in the browser console:

    ```
    var readView = new app.ReadView()
    readView.el
    readView.$el // wrapped in jQuery
    ```
1. **tagName**, **className** and **id**

    ```
    var app = app || {};

    app.ReadView = Backbone.View.extend({
        tagName: 'li',
        className: 'book',
        id: 'book-element'
    });
    ```
    try in the browser console:

    ```
    var readView = new app.ReadView()
    readView.el
    readView.$el // wrapped in jQuery
    readView.$el.removeClass() // jQuery functions can be used
    ```

1. **render**, **initilize** and inline **template**

    ```
    var app = app || {};

    app.ReadView = Backbone.View.extend({
      tagName: 'li',

      template: _.template("<%= title %> by <%= author %>"),

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.html( this.template(this.model.toJSON()));
      }
    });
    ```
    try in the browser console:

    ```
    var readView = new app.ReadView({model: read1})
    readView.el
    ```
1. external template

    in file `js/views/read.js`

    ```
    var app = app || {};

    app.ReadView = Backbone.View.extend({
      tagName: 'li',

      template: _.template( $( '#readView' ).html() ), // NEW

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.html( this.template(this.model.toJSON()));
        return this;
      }
    });

    ```
    in file `index.html`

    ```
    <script type="text/template" id="readView">
      <%= title %> by <%= author %>
    </script>
    ```
    try in browser console:

    ```
    var readView = new app.ReadView({model: read1})
    readView.el
    $(document.body).append(readView.el)
    ```

##4. collections

1. **start** in file `js/collections/reads.js`

    ```
    var app = app || {};

    app.Reads = Backbone.Collection.extend({
      model: app.Read
    });

    ```

    include the new file in the script tag in file `index.html`:

    ```
    ...
    <script src="js/models/read.js"></script>
    <script src="js/collections/reads.js"></script> <!-- new -->
    <script src="js/app.js"></script>
    ...
    ```

    add to file `js/app.js` for all initializations:

    ```
    …
    var readings = new app.Reads([read1, read2]);
    ```

    try in the browser console:

    ```
    readings.length; // 2
    readings.toJSON()
    ```

1. **initialize with add/remove/length** in file `js/collections/reads.js`

    ```
    initialize: function() {

        this.on('add', function(model){
          var title = model.get('title');
          console.log('New book added to the reading list: ' + title );
          console.log('Reading collection size: ' + this.length );
        });

        this.on('remove', function(model){
          var title = model.get('title');
          console.log('Book removed from the reading list: ' + title );
          console.log('Reading collection size: ' + this.length );
        });
    }
    ```
    try in the browser console:

    ```
    readings.remove([read1]);
    readings.add([read1]);
    ```



##5. collection view

1. in file `index.html` right after the `<body>`

    ```
    <div id="reads"></div>
    ```


1. in file `js/views/reads.js`:

    ```
    var app = app || {};

    app.ReadsView = Backbone.View.extend({

      el: '#reads',

      initialize: function( initialReads ) {
        this.collection = new app.Reads( initialReads );
        this.render();
        this.listenTo( this.collection, 'add', this.renderRead );
      },

      render: function() {
        this.collection.each(function( item ) {
          this.renderRead( item );
        }, this );
      },

      renderRead: function( item ) {
        var readView = new app.ReadView({
          model: item
        });
        this.$el.append( readView.render().el );
      }

    });
    ```
1. in file `js/app.js`

    ```
    var reads = [
      { title: 'Mythical Man-Month', author: 'Frederick Brooks' },
      { title: 'Pragmatic Programmer', author: 'Andrew Hunt and David Thomas' },
      { title: 'Code Complete', author: 'Steve McConnell'},
      { title: 'The Design of Everyday Things', author: 'Donald Norman' }
   ];

   new app.ReadsView(reads);

    ```

###6. add button

1. in file `index.html` add the following inside the `<div>` tags

    ```
    <div id="reads">
        <form id="addRead" action="#">
              <label for="title">Title: </label><input id="title" type="text" />
              <label for="author">Author: </label><input id="author" type="text" />
              <button id="add">Add</button>
        </form>
  </div>
    ```
1. in file `js/views/reads.js` add:

    ```
    events:{
      'click #add':'addRead'
    },

    addRead: function( e ) {
      e.preventDefault();

      var formData = {};

      $( '#addRead' ).children( 'input' ).each( function( i, el ) {
           formData[ el.id ] = $( el ).val();
      });

      this.collection.add( new app.Read( formData ) );
    }
    ```
1. try using the form to add the books

###7. delete button

1. add in file `index.html` a done button:

    ```
    <script type="text/template" id="readView">
        <%= title %> by <%= author %>
        <button id="done">Done</button>
    </script>
    ```
2. add in file `js/views/read.js`:

    ```
    events: {
      'click #done': 'doneReading'
    },

    doneReading: function() {
       this.model.destroy();
       this.remove();
    }
    ```
1. try to click the done buttons!

###8. improvements:

1. add a server side
2. connect to database
3. templates
4. add AMD script loader

##More Resources on BackboneJS
1. [Backbone Tutorials](http://backbonetutorials.com/)
2. [Backbone tutorials and screencasts](http://net.tutsplus.com/tag/backbone/)
1. [Journey through the JavaScript MVC Jungle](http://coding.smashingmagazine.com/2012/07/27/journey-through-the-javascript-mvc-jungle/)
2. [Rich JavaScript Applications – the Seven Frameworks ](http://blog.stevensanderson.com/2012/08/01/rich-javascript-applications-the-seven-frameworks-throne-of-js-2012/)
3. [A Comparison of Angular, Backbone, CanJS and Ember](http://sporto.github.io/blog/2013/04/12/comparison-angular-backbone-can-ember/)

##Build Link of this episode

[sidebar.io](http://sidebar.io/) - best design links everyday!
