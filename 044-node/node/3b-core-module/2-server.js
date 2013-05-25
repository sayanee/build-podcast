// without any variables
// as we are creating the server just once

require('http').createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
}).listen(4000);

console.log('Server running at localhost:4000');
