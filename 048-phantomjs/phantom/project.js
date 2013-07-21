var page = require('webpage').create(),
  url = 'http://localhost:8000/',
  fs = require('fs'),
  path = '/Users/sayanee/Desktop/phantom';

page.viewportSize = { width: 1200, height:720 };

console.log('Testing on: ' + url);
console.log('Project files: ' + fs.list(path));

page.onConsoleMessage = function(msg) {
  console.log('Page title: ' + msg);
}

page.open(url, function() {

  page.evaluate(function() {
    document.body.bgColor = '#fff';
    console.log(document.title);
  });

  page.render('before.jpg');
  console.log('before.jpg [' + fs.size(path + '/before.jpg') + '] bytes');

  page.includeJs('http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js', function() {
    page.evaluate(function() {
      $('#color').click();
    });

    page.render('after.jpg');
    console.log('after.jpg [' + fs.size(path + '/after.jpg') + '] bytes');

    phantom.exit();
  });

});
