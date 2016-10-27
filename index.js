var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.broadcast.emit('User connected');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

io.on('connection', function(socket){
  socket.on('user name', function(user){
    io.emit('user name', user);
  });
});

socket.on('disconnect', function () {
    io.emit('User disconnected');
 });

http.listen(port, function(){
  console.log('listening on *:Port:');
  console.log(port);
});
