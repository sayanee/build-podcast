// passing a data as the requested url

require('http').createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(req.url); // requested url
}).listen(4000);

console.log('Server running at localhost:4000');
