var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http, {
	pingInterval: 5000,
	pingTimeout: 15000,
	cookie: false
});
var robotIO = io.of('/robotControl');

// require modules
// var fs = require('fs');
// var archiver = require('archiver');

// const StreamZip = require('node-stream-zip');

// var packer = require('zip-stream');

// var zlib   = require('zlib');

// var content = fs.readFileSync(__dirname + '/mini.pgm');
// // 圧縮
// console.log('deflate');
// zlib.deflate(content, function(err, buffer) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(buffer);
// });


console.log(io);
// io.set('heartbeat interval', 10000);
// io.set('heartbeat timeout', 5000);
io.on('connection', function(socket){
	console.log("io connect");
	console.log(socket);

	socket.on('disconnect', function(data){
		console.log("io disconnect");
		console.log(data);
	})

	socket.on('recconect', function(socket){
		console.log("io reconnect");
		console.log(data);
	})

	socket.on('hello', function(data){
		console.log("io hello");
		console.log(data);
	})

	socket.on('my_message', function(data){
		console.log("my_message");
		console.log(data);
	})

	socket.on('discon_req', (data) => {
		console.log("get discoonect req io");
		socket.disconnect(0);
	})
});
robotIO.on('connection', function(socket){
	console.log("connect");
	console.log(socket);

	socket.on('disconnect', function(data){
		console.log("disconnect");
		console.log(data);
	})

	socket.on('recconect', function(socket){
		console.log("reconnect");
		console.log(data);
	})

	socket.on('hello', function(data){
		console.log("hello");
		console.log(data);
	})

	socket.on('my_message', function(data){
		console.log("my_message");
		console.log(data);
	})

	socket.on('discon_req', (data) => {
		console.log("get disconnect req");
		socket.disconnect(1);
	})
});

http.listen(3001, function(){
    console.log('Listening on *:3001');
});