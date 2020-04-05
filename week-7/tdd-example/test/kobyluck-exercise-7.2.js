/*
============================================
; Title: Exercise 7.2
; Author: Professor Krasso
; Date: 5 April 2020
; Modified By: Jonathan Kobyluck
; Description: TDD in Action
;===========================================
*/


var assert = require("assert");

describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});

function getFruits(str) {
  return str.split(",");
}

module.exports = getFruits;
