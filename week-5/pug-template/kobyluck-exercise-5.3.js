var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("index", {
    message: "This is my new homepage, based on Pug!"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application has started on port %s", 8080);
});
