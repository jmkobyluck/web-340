/*
;============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: 8 March 2020
; Modified By: Jonathan Kobyluck
; Description: Logging
;===========================================
*/

// Require statement that imports my header file
const header = require('../..kobyluck-header');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 3.2'));

// Line break
console.log(" ")


// start program

// require statements
var express =require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

// express declaration
var app = express();


app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// using logger
app.use(logger('dev'));

// function to send message when called
app.get('/', function(req, res) {
  res.render('index', {
    message: 'Hello, and welcome to Morgan!'
  });
});

http.createServer(app).listen(3000, function() {
  console.log('Application started and listening on port %s', 3000);
});
