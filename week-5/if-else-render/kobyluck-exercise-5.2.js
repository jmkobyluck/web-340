/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   21 March 2020
; Description: Demonstrates EJS 'if-else-render' operations.
; Modified by Jonathan Kobyluck
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var g = [
  "Halo",
  "Destiny",
  "Anthem",
  "Call of Duty"
];

app.get("/", function(req, res) {
  res.render("index", {
    games: games
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application has started on port %s", 8080);
});
