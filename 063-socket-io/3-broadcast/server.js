var app = require('http').createServer()
var io = require('socket.io')(app);

app.listen(8000);

io.on('connection', function (socket) {
  var alert = 'hello from the server :) ' + Math.random();

  socket.on('color', function() {
    socket.broadcast.emit('color', 'orange')
  })

  socket.on('disconnect', function () {
    console.log('1 client disconnected');
  });
});
