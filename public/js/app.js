// client side javascript

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

// Handles submitting of new message
var $form = jQuery('#message-form'); //selector picks element out of html, $ gives access to all methods in jQ

// access form and wait for it to be submitted, built-in browser event name 'submit' 
$form.on('submit', function (event) {
  event.preventDefault(); // disables the refresh on submit form so we submit form ourselves, use for socket/ajax
  
  var $message = $form.find('input[name=message]');
  socket.emit('message', {
    text: $message.val() // .find search inside form element for attr name = value 
  }); // send msg to server. set value to value of input. select input field, call val method to pull value out

  $message.val(''); // send empty string into val method to clear input after submission
});
