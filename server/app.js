const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();

const PORT = process.env.PORT || 2018;

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  },
});

server.listen(PORT, () => {
  io.on("connection", (socket) => {
    console.log("hopppaaaaaaa");
    console.log(socket.id);
    //! Karşılama Mesajı Gönder...
    socket.emit("WELCOME_MESSAGE", `Ooooooooo ${socket.id} kardeşim ojgeldin be yaaa...`);
    socket.on("NEW_BOOKMARK_EVENT", (bookmark) => {
      console.log("New bookmark geldi :>> ", bookmark);
      io.emit("NEW_BOOKMARK_ADDED", bookmark);
    });
  });
});
