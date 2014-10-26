// you can use any other web servers to serve index.html as well
var http = require('http'),
  fs = require('fs');


fs.readFile('./index.html', function (err, html) {
  if (err) {
    throw err;
  }
  http.createServer(function(request, response) {
    response.writeHeader(200, {
      "Content-Type": "text/html"
    });
    response.write(html);

    response.end();
  }).listen(8000);
});

console.log('Server running at localhost:8000');
