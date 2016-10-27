var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on('User connected', function(connections){
    io.emit('User connected', connections);
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

io.on('disconnect', function (socket) {
  socket.on('User disconnected', function(DC){
    io.emit('User disconnected', DC);
  });
});

http.listen(port, function(){
  console.log('listening on *:Port:');
  console.log(port);
});
