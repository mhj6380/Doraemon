const app = require("../index");
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const { serverIntro } = require("../methods");

const socketEvents = require("../config/socket");

socketEvents(io);

http.listen(8080, () => {
  serverIntro();
});
