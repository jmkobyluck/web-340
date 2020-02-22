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

// variable declaration:

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

var s = http.createServer(processRequest);

s.listen(8080);

// end program
