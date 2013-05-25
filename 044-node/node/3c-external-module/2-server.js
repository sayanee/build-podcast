var connect = require('connect');

connect.createServer(function(req, res) {
  res.end('<h1>Hello World in NodeJS!</h1>');
  // with html tags
}).listen(8080);

console.log('Server running at localhost:8080');
