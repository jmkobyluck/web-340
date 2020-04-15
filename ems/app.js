/*
============================================
; Title: Exercise 8.4
; Author: Professor Krasso
; Date: 12 April 2020
; Modified By: Jonathan Kobyluck
; Description: MongoDB Integration
;===========================================
*/

// require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var mongoose = require("mongoose");
var Employee = require("./models/employee");


var mongoDB = "mongodb+srv://jmkobyluck:JmK.484645@buwebdev-cluster-1-duvph.mongodb.net/ems?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function () {
  console.log("Application connected to mLab MongoDB instance");
});


var csrfProtection = csrf({ cookie: true });

// application
var app = express();

app.use(logger("short"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cookieParser());
app.use(helmet.xssFilter());
app.use(csrfProtection);
app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;
  next();
});


app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 8080);


app.get("/", function (req, res) {
  res.render("index", {
    title: "Employee Management System",
  });
});

app.get("/new", function (req, res) {
  res.render("new", {
    title: "Employee View",
  });
});

app.get("/view/:queryName", function (req, res) {
  var queryName = req.params["queryName"];

  Employee.find({ "firstName": queryName }, function (error, employees) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log(employees);

      if (employees.length > 0) {

        res.render("view", {
          title: "Employee View",
          employee: employees
        });
      } else {
        res.redirect("/");
      }
    }
  });
});

app.post("/process", function (req, res) {
  if (!req.body.firstName || !req.body.lastName) {
    res.status(400).send("Entries must have a full name");
    return;
  }

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;

  var emp = new Employee({
    firstName: firstName,
    lastName: lastName,
  });

  emp.save(function (error) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log(firstName + " " + lastName + " saved successfully!");
      res.redirect("/list");
    }
  });
});

app.get("/list", function (req, res) {
  Employee.find({}, function (error, employees) {
    if (error) {
      console.log(error);
      throw error;
    }

    res.render("list", {
      title: "Employee List",
      employees: employees
    });
  });
});


// create server
http.createServer(app).listen(8080, function () {
  console.log("Application has started on port %s", 8080);
});
