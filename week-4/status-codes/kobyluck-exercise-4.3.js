/*
;============================================
; Title: Exercise 4.3
; Author: Professor Krasso
; Date: 15 March 2020
; Modified By: Jonathan Kobyluck
; Description: HTTP Status Codes
;===========================================
*/

// Require statement that imports my header file
const header = require('../..kobyluck-header');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 4.3'));

// Line break
console.log(" ")


// start program

// require statements
var express = require('express');
var http = require('http');
var logger = require('morgan');

// express declaration
var app = express();

// using morgan for logger
app.use(logger('dev'));


// requests using status codes
app.get('/not-found', function(req, res) {
  res.status(404);

  res.json({
    error: 'Resource not found'
  });
});

app.get('/ok', function(req, res) {
  res.status(200);

  res.json({
    error: 'Page loaded correctly'
  });
});

app.get('/not-implemented', function(req, res) {
  res.status(501);

  res.json({
    error: 'Page not implemented'
  });
});

// creating server on port 8080
http.createServer(app).listen(8080, function() {
  console.log('Application has started on port %s', 8080);
});
