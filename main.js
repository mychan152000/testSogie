const express = require("express");
const routes = require("./routes/api");
//setup express app
const app = express();
const bodyParser = require("body-parser");
const epbs = require("express-handlebars");
const path = require("path");
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(routes);
// app.set("views", __dirname + "/public");
// app.engine("html", require("ejs").renderFile);
// app.set("view engine", "html");
app.engine(
  "handlebars",
  epbs({
    defaultLayout: "index",
    layoutsDir: path.join(__dirname, "views"),
  })
);
app.set("view engine", "handlebars");
// run - listen for request
port = 3939;
app.listen(process.env.PORT || 5000);
