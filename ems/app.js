/*
============================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Date: 29 March 2020
; Modified By: Jonathan Kobyluck
; Description:
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");

var logger = require("morgan");

var Employee = require("./models/employee")

var mongoDB = "<mLab connection string>";

mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
})

// application
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));
app.use(express.static(__dirname+'/public'));

// model
var employee = new Employee({
  name:"Tony Stark"
})

app.get("/", function(req, res) {
  res.render("index", {
    title: "Employee Management System"
  });
});

// create server
http.createServer(app).listen(8080, function() {
  console.log("Application has started on port %s", 8080);
});
