/*
============================================
; Title:  Assignment 1.5
; Author: Professor Krasso
; Date:   22 February 2020
; Modified By: Jonathan Kobyluck
; Description: Hello World
;===========================================
*/

// start program

// Require statement that imports my header file
const header = require('../kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Assignment 1.5'));

// line break
console.log("");

// require statement
var http = require("http");


function processRequest(req, res) {
  var body = "Kobyluck's World!";
  var contentLength = body.length;
  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });
  res.end(body);
}

// declaring s and passing the processRequest function through it
var s = http.createServer(processRequest);

// assigning "s" to port 8080
s.listen(8080);

// end program
