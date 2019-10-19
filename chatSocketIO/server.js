// var app  = require('express')();
// var http = require('http').Server(app);
// var io   = require('socket.io')(http);

const express = require("express");
const ws = require("http");
const socketio = require("socket.io");

const app = express();
const http = ws.Server(app);
const io = socketio();

const mongoose = require("mongoose");

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/chatio", { useNewUrlParser: true });

const chatSchema = new mongoose.Schema({
  createAt: Date,
  body: String
});

const Chat = mongoose.model("Chat", chatSchema);

app.get('/', async function (req, res) {
  const chatDate = req.body.createAt;
  const body = req.body.body;
  const chat = Chat.create({createAt: chatDate, body: body});
  res.sendFile(__dirname + '/index.html');
});

// Connect to Socket.io
io.on('connection', function (socket) {
  console.log('a user connected');

  socket.on('message', function (msg) {
    io.emit('message', msg);
    console.log("chat", msg);
  });

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});

