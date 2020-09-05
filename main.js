const express = require("express");
const routes = require("./routes/api");
//setup express app
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(routes);
// app.set("views", __dirname + "/public");
// app.engine("html", require("ejs").renderFile);
// app.set("view engine", "html");

// run - listen for request
port = 3939;
app.listen(process.env.port || port, function () {
  console.log("now listening on port ", port);
});
