import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//Step1 import db package 
import mongoose from 'mongoose';

//Step1 for auth - import module 
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

//modules for JWT support
import cors from 'cors';

//Step2 for auth - define authentication objects
let localStrategy = passportLocal.Strategy; // alias

//Step3 for auth - import the user model
import User from '../Models/user';

//Import the router data
import indexRouter from '../Routes/index';   // top-level routes
import movieListRouter from '../Routes/movie-list';  //movie-list routs
import authRouter from '../Routes/auth';

const app = express();

//Step2 Complete DB configuration
import * as DBConfig from './db';
mongoose.connect(DBConfig.LocalURI);

const db =mongoose.connection; //alias for mongoose.connection
//Step3 Listen for connections or errors
db.on("open", function(){
  console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});

db.on("error", function(){
  console.error(`Connection Error`); 
});
// view engine setup
app.set('views', path.join(__dirname, '../Views/'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use(cors()); // add CORS (cross-origin resource sharing)

//Step4 for auth - add express session
app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized:false,
  resave:false
}));

//Step5 auth -setup Flash
app.use(flash());

//Step5 auth - initialize passport session
app.use(passport.initialize());
app.use(passport.session());

//Step7 auth - implement Auth security
passport.use(User.createStrategy());

//Step8 auth - User serialization and deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Using Routes
app.use('/', indexRouter);
app.use('/', movieListRouter);
app.use('/', authRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: express.Request, res: express.Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
