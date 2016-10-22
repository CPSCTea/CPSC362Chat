var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  var string = 'UID'+ ':' + 'chat message';
  socket.on(string, function(msg){
    io.emit(string, msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:Port:');
  console.log(port);
});
