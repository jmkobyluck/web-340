var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));
app.use(express.static(__dirname+'/public'));

app.get("/", function(req, res) {
  res.render("index", {
    title: "Employee Management System"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application has started on port %s", 8080);
});
