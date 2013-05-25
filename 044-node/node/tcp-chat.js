// Ryan Dahl's talk on NodeJS TCP Chat server:
// http://www.youtube.com/watch?v=jo_B4LTHi3I

// start the chat server
// node chat.js

// open a few connections in command line tabs
// nc localhost 4001

var server = require('net').createServer(),
  sockets = [];

server.on('connection', function(socket) {

  console.log('got a new connection');
  sockets.push(socket);

  socket.on('data', function(data) {
    console.log('got data:', data);
    sockets.forEach(function(otherSocket) {

      if (otherSocket !== socket) { // prevents echo
        otherSocket.write(data);
      }
    });
  });

  socket.on('close', function() {
    console.log('connection closed');
    var index = sockets.indexOf(socket);
    sockets.splice(index, 1);
  });

});

server.on('error', function(err) {
  console.log('Server error:', err.message);
});

server.on('close', function() {
  console.log('Server closed');
});

server.listen(4001);
