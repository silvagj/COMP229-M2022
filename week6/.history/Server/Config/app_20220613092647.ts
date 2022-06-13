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
