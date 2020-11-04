const app = require("../index");
// const syncDb = require("./sync-db");
const { serverIntro } = require("../methods");

// syncDb().then((_) => {
app.listen(8080, function () {
  serverIntro();
});
// });
