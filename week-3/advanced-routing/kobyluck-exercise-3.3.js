/*
;============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 8 March 2020
; Modified By: Jonathan Kobyluck
; Description: Advanced Routing
;===========================================
*/

// Require statement that imports my header file
const header = require('../..kobyluck-header');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 3.3'));

// Line break
console.log(" ")


// start program

// require statements
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

// express declaration
var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// using logger
app.use(logger('dev'));

// function providing product id
app.get('/:productId', function(req, res) {
  var productId = parseInt(req.params.productId, 10);

  res.render('index', {
    productId: productId
  });
});

// creating the server
http.createServer(app).listen(3001, function() {
  console.log('Application has started and listening on port %s', 3001);
});
