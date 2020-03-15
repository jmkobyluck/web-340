var express = require('express');
var http = require('http');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));


// requests using status codes
app.get('/not-found', function(req, res) {
  res.status(404);

  res.json({
    error: 'Resource not found'
  });
});

app.get('/ok', function(req, res) {
  res.status(200);

  res.json({
    error: 'Page loaded correctly'
  });
});

app.get('/not-implemented', function(req, res) {
  res.status(501);

  res.json({
    error: 'Page not implemented'
  });
});

http.createServer(app).listen(8080, function() {
  console.log('Application has started on port %s', 8080);
});
