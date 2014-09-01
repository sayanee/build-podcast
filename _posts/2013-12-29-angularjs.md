---
title: 056 AngularJS
title_lowercase: 056 angularjs
tags: tutorial, screencast, technology, development, angularjs, frontend, javascript, mvc, ajax
description: AngularJS is a frontend JavaScript framework. In this episode we will build a tiny project to learn on how to implement controllers, hide or show certain sections of the dom, change styling conditionally all in the fun of building single-page-applications.
permalink: /angularjs/
enclosure: http://video.build-podcast.com/056-angularjs.mp4
length: 176798683
---

<div id="video"><iframe width="560" height="315" src="//www.youtube.com/embed/CTYXOfnKcNE" frameborder="0" allowfullscreen></iframe></div>

[AngularJS](http://angularjs.org/) is a frontend JavaScript framework. In this episode we will build a tiny project to learn on how to implement controllers, hide or show certain sections of the dom, change styling conditionally all in the fun of building single-page-applications.

<p><strong>Download video</strong>: <a href="http://video.build-podcast.com/056-angularjs.mp4" download="build-podcast-056-angularjs.mp4">mp4</a></p>

**Sample code**: [Github](https://github.com/sayanee/build-podcast/tree/master/056-angularjs)

**Version**: 1.2.6

**Similar episodes**: [014 Local Web Servers](/local-web-servers), [042 BackboneJS](/backbonejs)

##Background on AngularJS

1. [Main website](http://angularjs.org/)
1. [API documentation](http://docs.angularjs.org/api)

##Things to learn with AngularJS

###1. data binding

1. create `index.html` with these 4 elements:
    - `ng-app` portion of the html for angularjs to act upon
    - `script` tag to link to the angularjs cdn
    - `ng-model` change the model to update the control
    - `{{ "{{hello" }}}}`  display the datas

    ```
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>Things to learn in 2014!</title>
    </head>
    <body ng-app>

    <input type="text" ng-model="message">
    <p>{{ "{{message" }}}}</p>

    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular.min.js"></script>

    </body>
    </html>
    ```

###2. controllers

1. inside `index.html`

    ```
    <body ng-app>

    <div ng-controller="HelloCtrl">
      <p>{{ "{{message" }}}}</p>
    </div>

    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular.min.js"></script>
    <script>
    function HelloCtrl($scope){
      $scope.message = "Hello World";
    }
    </script>

    </body>
    ```
1. functions within controllers

    ```
    <div ng-controller="HelloCtrl">
      <p>{{ "{{message" }}}}</p>
      <p>uppercase: {{ "{{uppercase(message)" }}}}</p>
    </div>

    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular.min.js"></script>
    <script>
    function HelloCtrl($scope){
      $scope.message = "Hello World";

      $scope.uppercase = function(word) {
        return word.toUpperCase();
      }
    }
    </script>
    ```

###3. code organization

1. define the dom

    ```
    <body ng-app="App">

    <div ng-controller="HelloCtrl">
      <input type="text" ng-model="message">
      <p>{{ "{{uppercase(message)" }}}}</p>
    </div>
    ```

2. define the function and data in the controller

    ```
    ...
    <script>

    var app = angular.module('App', []);

    app.controller('HelloCtrl', function ($scope) {

      $scope.message = 'hello';
      $scope.uppercase = function(word) {
        return word.toUpperCase();
      }
    })

    </script>
    ...
    ```

###4. filters

1. creating filters

    ```
    ...
    <p>uppercase: {{ "{{message | uppercase" }}}}</p>
    ...
    <script>
    ...
    app.filter('uppcase', function(word) {
      return word.toUpperCase();
    })
    </script>
    ```
1. [in-built filters](http://docs.angularjs.org/api/ng.filter:currency)

    ```
    <!-- currency -->
    ...
    <p>price: {{ "{{price | currency:"EUR "" }}}}</p>
    ...
    $scope.price = 23.556;
    ...

    <!-- time -->
    ...
    <p>now: {{ "{{startingTime | date:"medium"" }}}}</p>
    ...
    $scope.startingTime = Date.now();
    ...
    ```

###5. repeated data `ng-repeat`

1. a list of books to read that can be filtered:

    ```
    <div ng-controller="BooksCtrl">
      <input type="text" ng-model="search">
      <ol>
        <li ng-repeat='book in books | filter:search'>
          <strong>{{ "{{book.name" }}}}</strong> by {{ "{{book.author" }}}}
        </li>
      </ol>
    </div>

    ```
2. with the following data structure and script:

    ```
    <script>

    var app = angular.module('App', []);

    app.controller('BooksCtrl', function ($scope) {

      $scope.books = [
        { name: 'Modern Operating Systems', author: 'Andrew S. Tanenbaum' },
        { name: 'Design Patterns', author: 'Gang of 4' },
        { name: 'Structure and interpretation of computer programs', author: 'Gerald Jay Sussman and Hal Abelson' },
        { name: 'Getting Started with Electronics', author: 'Forrest M. Mims' },
        { name: 'Code Complete', author: 'Steve McConnell' },
        { name: 'Design of Everyday Things', author: 'Donald A. Norman' },
        { name: 'The Feynman Lectures on Physics', author: 'Richard Feynman' },
        { name: 'Universal Principles of Design', author: 'William Lidwell, Kritina Holden, Jill Butler' }
      ]

    })

    </script>
    ```

###6. display data if chosen `ng-if`

1. select for a quick look of the book with a summary and cover image:

    ```
    <div ng-controller="BooksCtrl">
        <input type="text" ng-model="search">
        <hr>
        <table border=1 cellpadding=5>
        <tr>
            <th>#</th>
            <th>Book detail</th>
        </tr>
        <tr ng-repeat='book in books | filter:search'>
            <td>{{ "{{ $index +1 " }}}}</td>
            <td>
            <input type="checkbox" ng-model="selected">
            <strong>{{ "{{book.name" }}}}</strong> by {{ "{{book.author" }}}}
            <div ng-if="selected">
                <p>{{ "{{ book.summary " }}}}</p>
                <img ng-src="{{"{{book.cover" }}}}" alt="{{"{{ book.name " }}}}">
            </div>
            </td>
        </tr>
        </table>
        {{ "{{reading" }}}}
    </div>
    ```
2. structure of the books will now include the image and summary:

    ```
    $scope.books = [
    {
      name: 'Modern Operating Systems',
      author: 'Andrew S. Tanenbaum',
      summary: 'The widely anticipated revision of this worldwide best-seller incorporates the latest developments in operating systems technologies.',
      cover: 'img/1.jpg'
    },
    {
      name: 'Design Patterns',
      ...
    ```


###7. change styled with `ng-class`

1. add a style

    ```
    <style>
  .selected{background-color: wheat;}
  </style>
    ```
2. add another column for quantity with `ng-class` conditions for the entire table row

    ```
    <tr>
      <th>#</th>
      <th>Book detail</th>
      <th>Quantity</th>
    </tr>
    …

    <tr ng-repeat='book in books | filter:search' ng-class="{selected: (book.quantity > 0)}">

    …

    <td>
        <select ng-model="book.quantity">
            <option value="0" selected>0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    </td>
    ```

###8. do something upon an action `ng-change`

1. upon adding each book

    ```
    <select ng-model="book.quantity" ng-change="addBooks(book)">
    ```
2. add the script

    ```
    $scope.selectedBooks = {};

    ...

    $scope.addBooks = function(book) {
        $scope.selectedBooks[book.name] = {'name': book.name, 'quantity': parseInt(book.quantity, 10) };
        if(book.quantity === '0') {
            delete $scope.selectedBooks[book.name];
        }
        // console.log($scope.selectedBooks);
    }
    ```
3. (optional) you can try to display them as html as well

    ```
    <ol>
        <li ng-repeat="book in selectedBooks">
          <strong>{{ "{{book.name" }}}}</strong> [{{ "{{ book.quantity " }}}}]
        </li>
    </ol>
    ```

###9. hide and show parts of ui `ng-hide` and `ng-show`

1.  trigger the hide and show

    ```
    <button ng-hide="dispatched" ng-click="getBooks()">GET THE BOOKS!</button>
    ```
2. define what `getBooks()` does

    ```
    $scope.dispatched = false;

    $scope.getBooks = function() {
        $scope.dispatched = true;
    }
    ```
1. hide and show according:

    ```
    <input ng-hide="dispatched" type="text" ng-model="search">
    <hr ng-hide="dispatched">
    <table ng-hide="dispatched" border=1 cellpadding=5>
    …

    <button ng-hide="dispatched" ng-click="getBooks()">GET THE BOOKS!</button>

    <p ng-show="dispatched">Hurray! Your books are on the way ;-)</p>
    <ol ng-show="dispatched">
    ```

##Credits

The summaries and cover images of these books in the project were taken from the following websites:

1. [Amazon](http://www.amazon.com/Modern-Operating-Systems-3rd-Edition/dp/0136006639): Modern Operating Systems by Andrew S. Tanenbaum
1. [Amazon](http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612): Design Patterns by Gang of 4
1. [MIT Press](http://mitpress.mit.edu/sicp/full-text/book/book.html): Structure and interpretation of computer programs by Gerald Jay Sussman and Hal Abelson
1. [Amazon](http://www.amazon.com/Getting-Started-Electronics-Forrest-Mims/dp/0945053282): Getting Started with Electronics by Forrest M. Mims
1. [Amazon](http://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670): Code Complete by Steve McConnell
1. [Amazon](http://www.amazon.com/Design-Everyday-Things-Donald-Norman/dp/0465067107): Design of Everyday Things by Donald A. Norman
1. [Caltech](http://www.feynmanlectures.caltech.edu/): The Feynman Lectures on Physics by Richard Feynman
1. [Amazon](http://www.amazon.com/Universal-Principles-Design-William-Lidwell/dp/1592530079): Universal Principles of Design by William Lidwell, Kritina Holden, Jill Butler

##More Resources on AngularJS

1. [ngResource](http://docs.angularjs.org/api/ngResource.$resource) for RESTful interaction with server and [http module](http://docs.angularjs.org/api/ng.$http) for simple interaction with serverside
1. change url using [$location](http://docs.angularjs.org/guide/dev_guide.services.$location)
1. [Egghead videos](http://egghead.io/lessons)
1. [AngularJS Oreilly book](http://shop.oreilly.com/product/0636920028055.do)
1. [Tutsplus video course](https://tutsplus.com/course/easier-js-apps-with-angular/)
1. [BackboneJS](http://backbonejs.org/) and [EmberJS](http://emberjs.com/) - other frontend mvc frameworks


##Build Link of this episode

[Yeoman Digest](http://updates.html5rocks.com/tag/yeoman)
