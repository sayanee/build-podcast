[![Build Status](https://secure.travis-ci.org/vesln/teacher.png)](http://travis-ci.org/vesln/teacher)

# teacher

## Description

Teacher is your best friend when it comes to spell checking. It is
simple but yet powerful After The Deadline API client.

Supported languages:

- English
- French
- German
- Portuguese
- Spanish


## Synopsis

```js
/**
 * Dependencies.
 */
var teacher = require('teacher');

/**
 * Simple.
 */
teacher.check('Thsi si wrogn', function(err, data) {
	console.log(data);
});

teacher.check('This is right', function(err, data) {
	console.log(data);
});

/**
 * Advanced with custom language.
 */
var teach = new teacher.Teacher('fr', ['ignored type']);

teach.check('No idea.', function(err, data) {
	console.log(data);
});
```

## Requirements

- NPM (http://npmjs.org/)
- Node.js (http://nodejs.org/)

## Install

```
$ npm install teacher
```

## Tests

```
$ cd teacher
$ npm install
$ make test
```

## License

MIT License

Copyright (C) 2012 Veselin Todorov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
