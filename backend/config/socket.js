const totalRoomList = {};
const totalUserList = {};
const waitingQueue = [];

module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("joinRoom", (data) => {
      console.log("JOIN ROOM");
      console.log(data);
      socket.join(socket.id);
    });

    socket.on("leaveRoom", () => {
      const roomKey = totalRoomList[socket.id];
      socket.leave(roomKey);
    });

    socket.on("disconnect", () => {
      if (waitingQueue[0] && waitingQueue[0].id === socket.id) {
        waitingQueue.shift();
      }
      const roomKey = totalRoomList[socket.id];

      socket.broadcast.to(roomKey).emit("partnerDisconnection");
      delete totalRoomList[socket.id];
      delete totalUserList[socket.id];
    });

    socket.on("connect_error", (err) => {
      socket.emit("connect_error", err);
    });

    socket.on("error", (err) => {
      socket.emit("error", err);
    });
  });
};
