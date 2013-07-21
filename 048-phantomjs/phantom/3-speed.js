var page = require('webpage').create(),
  t = Date.now();

page.open('http://google.com/', function() {
  t = Date.now() - t;
  console.log('Loading time: ' + t + ' ms');

  phantom.exit();
});
