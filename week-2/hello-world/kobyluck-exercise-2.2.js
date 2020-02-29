/*
============================================
; Title:  Exercise 2.2
; Author: Professor Krasso
; Date:   29 February 2020
; Modified By: Jonathan Kobyluck
; Description: Hello World
;===========================================
*/

// Require statement that imports my header file
const header = require('../../kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 2.2'));

// line break
console.log("");

/*
Expected output:

Johnny Kobyluck
Exercise 2.2
Date: <current date>

Application started on port 8080

*/

// require statements
var express = require('express');
var http = require('http');

// calling express to run a new express application
var app = express();

// app.use function to return a value to those that try to access the url
app.use(function(req, res) {
  console.log('In comes a request to: %s', req.url);

  res.end('Hello World\n');
});

// starting the server on port 8080
http.createServer(app).listen(8080, function() {
  console.log('Application started on port %s', 8080);
});
