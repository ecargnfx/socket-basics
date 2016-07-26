var socket = io(); // io function created from socket library

// (eventName, function to run when eventName happens)
socket.on('connect', function(){
  console.log('connected to socket.io server!'); //when successful connection is made to server, tells frontend
});