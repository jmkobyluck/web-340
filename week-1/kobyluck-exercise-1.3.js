/*
============================================
; Title:  Exercise 1.3
; Author: Professor Krasso
; Date:   22 February 2020
; Modified By: Jonathan Kobyluck
; Description: Modules
;===========================================
*/

// Require statement that imports my header file
const header = require('../kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 1.3'));

// line break
console.log("");

/*
Expected output:

Johhny Kobyluck
Exercise 1.3
Date: (current date)

https:
www.exercise1point3.com
name=kobyluck
*/

// start program

// declaring url variable
var url = require('url');

var parsedURL = url.parse('https://www.exercise1point3.com/profile?name=kobyluck');

// outputting the url protocol, host, and querys
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// end program
