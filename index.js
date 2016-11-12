var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	
	console.log('a user connected');
	io.emit('user connect');
	socket.on('disconnect', function(){
		io.emit('user disconnect');
    console.log('user disconnected');
	});
	socket.on('new user',function(name){
		io.emit('new user',name)
	});
	
  socket.on('chat message', function(name,msg){
    io.emit('chat message', name,msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:Port:');
  console.log(port);
});
