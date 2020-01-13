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

io.on("connection", socket => {
  console.log("New connection!");

  socket.on("message", messageSent => {
    console.log(messageSent);
  });

  socket.on("disconnect", () => {
    console.log("user have left!");
  });

  //   socket.emit("news", { hello: "world" });
  //   socket.on("my other event", function(data) {
  //     console.log(data);
  //   });
});
