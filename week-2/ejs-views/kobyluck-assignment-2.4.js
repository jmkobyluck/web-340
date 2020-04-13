/*
============================================
; Title:  Assignment 2.4
; Author: Professor Krasso
; Date:   29 February 2020
; Modified By: Jonathan Kobyluck
; Description: Routes
;===========================================
*/

// Require statement that imports my header file
const header = require("../../kobyluck-header.js");

// Calling the console log function to display my header
console.log(header.display("Johnny", "Kobyluck", "Assignment 2.4"));

// line break
console.log("");

/*
Expected output:

Johnny Kobyluck
Assignment 2.4
Date: <current date>

Application started on port

*/

// require statements
var express = require("express");
var http = require("http");
var path = require("path");

// calling express to run a new express application
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// routes
app.get("/", function (req, res) {
  response.render("index", {
    firstName: "Jonathan",
    lastName: "Kobyluck",
    address: "123 Webdev Ln",
  });
});

// starting the server on port 8080
http.createServer(app).listen(8080, function () {
  console.log("EJS-Views app started on port %s", 8080);
});
