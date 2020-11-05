const app = require("../index");
var http = require("http").createServer(app);
var io = require("socket.io")(http);

const { serverIntro } = require("../methods");

app.get("/", (req, res) => {
  res.json("DORAEMON");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

io.on("initialConnect", (data) => {
  console.log(data);
});

http.listen(8080, () => {
  serverIntro();
});
