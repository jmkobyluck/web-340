/*
============================================
; Title: Exercise 7.3
; Author: Professor Krasso
; Date: 5 April 2020
; Modified By: Jonathan Kobyluck
; Description: Mocha and Chai
;===========================================
*/


var fruits = require("../kobyluck-fruits");
var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {
  it("should return an array of fruits", function() {
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});
