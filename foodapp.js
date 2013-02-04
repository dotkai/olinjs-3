/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , ingredient = require('./routes/ingredient')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/burgers');
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/ingredient/new', ingredient.new);
app.get('/order/new', ingredient.neworder);
app.get('/orders', ingredient.list);

app.post('/ingredient/create', ingredient.create);
app.post('/ingredient/submit', ingredient.submitorder);
app.post('/order/complete', ingredient.endorder);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
