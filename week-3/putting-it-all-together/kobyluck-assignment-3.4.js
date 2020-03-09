/*
;============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 8 March 2020
; Modified By: Jonathan Kobyluck
; Description: Putting it all together
;===========================================
*/

// Require statement that imports my header file
const header = require('../..kobyluck-header');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Assignment 3.4'));

// Line break
console.log(" ")


// start program

// require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// express declaration
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// using morgan logger
app.use(logger("short"));

// function tab page titles
app.get("/", function(req, res) {
  res.render("index", {
    message: "home page"
  });
});

app.get("/about", function(req, res) {
  res.render("about", {
    message: "about page"
  });
});

app.get("/contact", function(req, res) {
  res.render("contact", {
    message: "contact page"
  });
});

app.get("/products", function(req, res) {
  res.render("products", {
    message: "products page"
  });
});

// creating the server
http.createServer(app).listen(8080, function() {
  console.log("Application has started and listening on port %s", 8080);
});
