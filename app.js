const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const bodyParser = require('body-parser');
const AppError = require('./utils/appError');

const app = express();
// 1) MIDDLEWARES
// app.use(bodyParser.json({ limit: '10mb' }));
//Global :  Ip requiests

//Security HTTP headers
app.use(helmet());
//Limit request from same ip
const limiter = rateLimit({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this Id , please try again in one hour'
});

app.use('/api', limiter);
///Development logging
app.use(morgan('dev'));
app.use(cookieParser());
//Body parser : reading data from body into req.body

app.use(express.json({ limit: '100kb' })); //body larger than 100kb will not be accepted

/// Data sanitization against XSS (HTML)
app.use(xss());
//Removing parameter pollution (double sort ...) and and allowing some parameters in the array to be used in the searching
app.use(
  hpp({
    whitelist: []
  })
);
// Serving static files
// app.use(express.static(`${__dirname}/public`));
//Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins
//(domain, scheme, or port) other th  an its own from which a browser should permit loading resources
app.use(cors());
app.use(compression());

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/// My React App Directry
app.use(express.static(path.resolve(__dirname, 'view/build')));
//// ROUTES IMPORTING
const filesRouter = require('./routes/filesRouter');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const moviesRoutes = require('./routes/moviesRoutes');
const logsRouter = require('./routes/logsRoutes');
const myCloudRoutes = require('./routes/myCloudRoutes');
// 3) ROUTES
app.use('/api/v1/images', filesRouter);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/movies', moviesRoutes);
app.use('/api/v1/logs', logsRouter);
app.use('/api/v1/mycloud', myCloudRoutes);
// 4) Images for React Router
app.use(express.static('images'));
app.use('/', express.static(__dirname + '/images'));
app.use('/movies/:id', express.static(__dirname + '/images'));
app.use('/Admin', express.static(__dirname + '/images'));
app.use('/Admin/:id', express.static(__dirname + '/images'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'view/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
