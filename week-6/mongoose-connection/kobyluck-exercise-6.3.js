var express = require("express");
var http = require("http");
var mongoose = require("mongoose");
var logger = require("morgan");

var mongoDB = "mongodb+srv://jmkobyluck:JmK.484645@buwebdev-cluster-1-duvph.mongodb.net/ems";
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function() {
  console.log("Application connected to mLab Mongo instance")
});

var app = express();

app.use(logger("dev"));

http.createServer(app).listen(5000, function() {
  console.log("Application has started on port %s", 5000);
});
