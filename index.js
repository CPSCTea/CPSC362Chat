var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT;
var list[20];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

io.on('connection', function(log){
  log.on('append', function(msg){
    var mod = false;
    for (int i = 0; i<20; i++)
    {
      if (list[i]=='')
      {
        list[i]=msg;
        mod= true;
      }
    }
    if (mod == false)
    {
      for (int i = 0; i<19; i++)
      {
        list[i] = list[i+1];
      }
      list[19]=msg;
    }
    msg = list;
  });
});

http.listen(port, function(){
  console.log('listening on *:Port:');
  console.log(port);
});
