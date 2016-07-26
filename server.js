var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
//create server using node module 
var http = require('http').Server(app); // tells node to start new server and use this express app as boilerplate
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public')); //app.get adds a new route to express API

// .on listens for events, pass in name of event, use io on the connection event
// when we get connection event, when event happens run function
// tell server to wait for connection, when we get it from client we run function
io.on('connection', function(){
  console.log('User connected via socket.io!');
}); 

http.listen(PORT, function(){
  console.log('Server started!');
});