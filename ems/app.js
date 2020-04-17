/*
============================================
; Title: Exercise 9.3
; Author: Professor Krasso
; Date: 12 April 2020
; Modified By: Jonathan Kobyluck
; Description: It's in the cloud
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


// establishing database connection
var mongoDB = "mongodb+srv://jmkobyluck:JmK.484645@buwebdev-cluster-1-duvph.mongodb.net/ems?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function () {
  console.log("Application connected to mLab MongoDB instance");
});

// security protection
var csrfProtection = csrf({ cookie: true });

// application
var app = express();

// using the logger
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

// adding a public folder for css and js
app.use(express.static(__dirname + "/public"));

// setting up the view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 8080);

// getting the index page
app.get("/", function (req, res) {
  res.render("index", {
    title: "Employee Management System",
  });
});

// getting the new page
app.get("/new", function (req, res) {
  res.render("new", {
    title: "EMS | New",
  });
});

// getting the view page
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

// processing writing an employee
app.post("/process", function (req, res) {
  if (!req.body.firstName || !req.body.lastName || !req.body.phoneNumber || !req.body.dateOfBirth || !req.body.empId || !req.body.email || !req.body.hireDate || !req.body.position) {
    res.status(400).send("All fields must be filled out!");
    return;
  }

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var phoneNumber = req.body.phoneNumber;
  var dateOfBirth = req.body.dateOfBirth;
  var empId = req.body.empId;
  var email = req.body.email;
  var hireDate = req.body.hireDate;
  var position = req.body.position;

  var emp = new Employee({
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    dateOfBirth: dateOfBirth,
    empId: empId,
    email: email,
    hireDate: hireDate,
    position: position
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

// getting the list page
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
http.createServer(app).listen(app.get("port"), function () {
  console.log("Application has started on port " + app.get("port"));
});
