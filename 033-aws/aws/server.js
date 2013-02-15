var sys = require( "sys" );
var http = require( "http" );

var server = http.createServer(
  function( request, response ){
    response.writeHead( 200, {"content-type": "text/plain"} );
    response.write( "Hello World in Node.js from AWS!\n" );
    response.end();
  });

server.listen( 8080 );
