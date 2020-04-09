/*
============================================
; Title: Exercise 8.3
; Author: Professor Krasso
; Date: 9 April 2020
; Modified By: Jonathan Kobyluck
; Description: Cross-Site Request Forgery
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var helmet = require("helmet");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var csrf = require("csurf");

var logger = require("morgan");

var Employee = require("./models/employee");

var csrfProtection = csrf({ cookie: true });

var mongoDB = "<mLab connection string>";

// mongoose.connect(mongoDB, {
//   useMongoClient: true,
// });

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
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());
app.use(csrfProtection);
app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;
  next();
});


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

app.post("/process", function (req, res) {
  console.log(req.body.txtName);
  res.redirect("/");
});

// create server
http.createServer(app).listen(8080, function () {
  console.log("Application has started on port %s", 8080);
});
