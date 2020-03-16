/*
;============================================
; Title: Exercise 4.2
; Author: Professor Krasso
; Date: 15 March 2020
; Modified By: Jonathan Kobyluck
; Description: JSON APIs
;===========================================
*/

// Require statement that imports my header file
const header = require('../..kobyluck-header');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 4.2'));

// Line break
console.log(" ")


// start program

// require statements
var express = require('express');
var http = require('http');

// express declaration
var app =express();

// .get function to retrieve information from api
app.get("/customer/:id", function(req, res) {
  var id = parseInt(req.params.id, 10);
  res.json({
    firstName: "Johnny",
    lastName: "Kobyluck",
    employeeId: id
  });
});

// creating the server on port 8080
http.createServer(app).listen(8080, function() {
  console.log("Application has started on port %s", 8080);
});
