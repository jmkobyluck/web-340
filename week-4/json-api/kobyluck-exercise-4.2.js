var express = require('express');
var http = require('http');


var app =express();


app.get("/customer/:id", function(req, res) {
  var id = parseInt(req.params.id, 10);
  res.json({
    firstName: "Johnny",
    lastName: "Kobyluck",
    employeeId: id
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application has started on port %s", 8080);
});
