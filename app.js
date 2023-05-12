import createError from "http-errors";
import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import path from "path";
import { fileURLToPath } from 'url';

import indexRouter from "./routes/index.js";
import dbTestRouter from './routes/db-test.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// express setup
app.use(logger('dev')); // log every request
app.use(json()); // parse request body JSON
app.use(urlencoded({ extended: false })); // parse request body as urlencoded data
app.use(cookieParser()); // parses cookies, set: res.cookie("name", "value"), get: req.cookies
app.use(express.static(path.join(__dirname, 'public')));

// set routes
app.use('/', indexRouter);
app.use('/db-test', dbTestRouter);

// if none of the above match, catch 404 and forward to error handler
app.use((req, _res, next) => {
  next(createError(404, `${req.originalUrl} does not exist`)); // next sends it to the next app.use() function
});

// error handler
app.use((err, req, res, _next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;