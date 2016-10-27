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
  socket.on({'user name','chat message'}, function(msg){
    io.emit({'user name','chat message'}, msg);
  });
});

io.on('disconnect', function () {
    io.emit('User disconnected');
 });

http.listen(port, function(){
  console.log('listening on *:Port:');
  console.log(port);
});
