var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
//create server using node module 
var http = require('http').Server(app); // tells node to start new server and use this express app as boilerplate
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public')); //app.get adds a new route to express API

// .on listens for events, pass in name of event, use io on the connection event
// when we get connection event from client, when event happens run function
// when successful connection is made to client
// tell server to wait for connection, when user connects we run function
io.on('connection', function(socket){
  console.log('User connected via socket.io!');

  // modify server to enable two browsers to communicate with each other by emitting every msg received
  // I send msg to server, server sends msg to you
  // this listens to event
  // 'message' is event type. (message) stores data passed in as an object w/ text property
  socket.on('message', function(message){
    console.log('Message received: ' + message.text);

    //emit event to all other connections (sends out msg w/ emit)
    // io.emit sends to everyone (every browser connected to app) including sender
    // broadcast sends it to everyone but the sender
    socket.broadcast.emit('message', message);
  });


  // when user connects to chat app, we emit a custom event named message, send object w/ text property
  //reference socket object, call method to emit event, takes 2 args: eventName and data to send. 
  // tip: pass an object for the second argument to store all kinds of info
  // message can have many properties ie, timestamp, from attribute, text attribute to store msg
  // then integrate w/ frontend, it listens for message event and do something when gets it
  socket.emit('message', {
    text: 'Welcome to the chat application!' // gives the message object a text property
  });
}); 

http.listen(PORT, function(){
  console.log('Server started!');
});

