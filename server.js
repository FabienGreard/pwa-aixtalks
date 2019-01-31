const express = require('express'),
  app = express(),
  path = require('path');

const step = '/step-3/';

// Serv static file
app.use(express.static(path.join(__dirname + step)));
app.use(express.static(path.join(__dirname, step + 'src')));

// Import Routes
app.get('*', (req, res, next) => {
  res.redirect('/');
  res.sendFile(__dirname + step + '/index.html');
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === 'development' && err;

  // render the error page
  res.status(err.status || 500);

  res.render('error');
});

app.listen(3000);
