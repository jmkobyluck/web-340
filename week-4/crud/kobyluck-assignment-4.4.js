/*
============================================
; Title:  Assignment 4.4
; Author: Johnny Kobyluck
; Date:   15 March 2020
; Description: cURL
;===========================================
*/

// start program

// require statements
var express = require("express");
var http = require("http");
var logger = require("morgan");

// express declaration
var app = express();

// using morgan as logger
app.use(logger('dev'));

// GET request
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

// PUT request
app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

// POST request
app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

// DELETE request
app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

// creating server on port 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
