const mongoose = require("mongoose");
module.exports = () => {
  function connect() {
    mongoose.connect(
      "mongodb://아이디:패스워드@아이피:27017/디비이름",
      function (err) {
        if (err) {
          console.error("mongodb connection error", err);
        }
        console.log("mongodb connected");
      }
    );
  }
  connect();
  mongoose.connection.on("disconnected", connect);
  require("../models/user");
};
