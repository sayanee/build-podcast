var connect = require('connect');

connect.createServer(function(req, res) {
  res.end('Hello World in NodeJS!');
}).listen(8080);

console.log('Server running at localhost:8080');
