var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/app.js'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rachelapi');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.use('/', require('./api/routes/app.js'));

app.listen(port);
console.log('API Listening on: ' + port);
