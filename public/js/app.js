var socket = io(); // io function created from socket library

// (eventName, callback function to run when eventName happens)
socket.on('connect', function(){
  console.log('connected to socket.io server!'); //when successful connection is made to server, tells frontend
});

// listen for custom event name, when gets message, run function. 
// function gets passed the data input
socket.on('message', function(message){
  console.log('new message:');
  console.log(message.text);
});

