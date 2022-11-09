var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dogRouter=require('./routes/dog');
var gridbuildRouter=require('./routes/gridbuild');
var selectorRouter=require('./routes/selector');
var dog = require("./models/dog");
var resourceRouter = require('./routes/resource');
// We can seed the collection if needed on server start 
async function recreateDB(){ 
  // Delete everything 
  await dog.deleteMany(); 
 
  let instance1 = new 
dog({Dog_age:3,  Dog_breed:"French Bulldog", 
Dog_speciality:"Quirky and Playful"}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
  let instance2 = new 
dog({Dog_age:2,  Dog_breed:"Poodle", 
Dog_speciality:"Energetic and smart"}); 
  instance2.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Second object saved") 
  });
  let instance3 = new 
dog({Dog_age:1,  Dog_breed:"Golden Retriever", 
Dog_speciality:"Outgoing and Trustworthy"}); 
  instance3.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Third object saved") 
  });
} 
 
let reseed = true; 
if (reseed) { recreateDB();} 

require('dotenv').config(); 
const connectionString =process.env.MONGO_CON
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, 
useUnifiedTopology: true});

//Get the default connection 
var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
  console.log("Connection to DB succeeded")}); 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dog', dogRouter);
app.use('/gridbuild',gridbuildRouter)
app.use('/selector',selectorRouter)
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
