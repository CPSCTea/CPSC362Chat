var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

io.on('connection', function(dark){
  dark.on('uidx', function(uidy){
    io.emit('uidx', uidy);
  });
});

http.listen(port, function(){
  console.log('listening on *:Port:');
  console.log(port);
});
