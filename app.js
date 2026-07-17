import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';
import expressLayouts from 'express-ejs-layouts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

var bhakas = express();

// view engine setup
bhakas.set('views', path.join(__dirname, 'views'));
bhakas.set('view engine', 'ejs');
bhakas.use(expressLayouts);
bhakas.set('layout', 'layout');

bhakas.use(logger('dev'));
bhakas.use(express.json());
bhakas.use(express.urlencoded({ extended: false }));
bhakas.use(cookieParser());
bhakas.use(express.static(path.join(__dirname, 'public')));

bhakas.use('/', indexRouter);
bhakas.use('/users', usersRouter);

// catch 404 and forward to error handler
bhakas.use(function(req, res, next) {
  next(createError(404));
});

// error handler
bhakas.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default bhakas;
