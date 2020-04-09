/*
============================================
; Title: Exercise 8.2
; Author: Professor Krasso
; Date: 9 April 2020
; Modified By: Jonathan Kobyluck
; Description: Cross-Site Scripting
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var helmet = require("helmet");

var logger = require("morgan");

var Employee = require("./models/employee");

var mongoDB = "<mLab connection string>";

mongoose.connect(mongoDB, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function () {
  console.log("Application connected to mLab MongoDB instance");
});

// application
var app = express();

app.use(logger("short"));
app.use(express.static(__dirname + "/public"));
app.use(helmet.xssFilter());

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// model
var employee = new Employee({
  name: "Tony Stark",
});

app.get("/", function (req, res) {
  res.render("index", {
    title: "Employee Management System",
  });
});

// create server
http.createServer(app).listen(8080, function () {
  console.log("Application has started on port %s", 8080);
});
