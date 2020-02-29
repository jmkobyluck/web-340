/*
============================================
; Title:  Exercise 2.3
; Author: Professor Krasso
; Date:   29 February 2020
; Modified By: Jonathan Kobyluck
; Description: Routes
;===========================================
*/

// Require statement that imports my header file
const header = require('../../kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 2.3'));

// line break
console.log("");

/*
Expected output:

Johnny Kobyluck
Exercise 2.3
Date: <current date>

Application started on port 3000

*/

// require statements
var express = require('express');
var http = require('http');

// calling express to run a new express application
var app = express();

// routes
app.get('/', function(req, res) {
  res.end('Welcome to the homepage.\n');
});

app.get('about', function(req, res) {
  res.end('Welcome to the about page.\n');
});

app.get('contact', function(req, res) {
  res.end('Welcome to the contact page.\n');
});

// app.use function to return a value to those that try to access the url
app.use(function(req, res) {
  res.statsCode = 404;
  res.end('404!\n');
});

// starting the server on port 3000
http.createServer(app).listen(3000, function() {
  console.log('Application started on port %s', 3000);
});
