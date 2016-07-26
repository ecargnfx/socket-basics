var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
//create server using node module 
var http = require('http').Server(app); // tells node to start new server and use this express app as boilerplate

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function(){
  console.log('Server started!');
});