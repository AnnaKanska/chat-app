const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});

const connections = [];

io.on("connection", socket => {
  console.log("New connection!");
  connections.push(socket);

  socket.on("message", messageSent => {
    connections.forEach(socket => socket.emit("message", messageSent));
    console.log(messageSent);
  });

  socket.on("disconnect", () => {
    const deleteIndex = connections.indexOf(socket);
    connections.splice(deleteIndex, 1);
    console.log("user have left!");
  });
});
