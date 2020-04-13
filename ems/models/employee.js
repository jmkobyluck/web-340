/*
============================================
; Title: Assignment 7.4
; Author: Professor Krasso
; Date: 5 April 2020
; Modified By: Jonathan Kobyluck
; Description: Mongoose Schema
; and Model Development
;===========================================
*/

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// define employeeSchema
var employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// define the employee model
module.exports = mongoose.model("Employee", employeeSchema);
