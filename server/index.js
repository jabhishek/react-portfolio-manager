const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const serveStatic = require('serve-static');

const port = process.env.PORT || 9000;

const rootPath = path.join(__dirname, '/..');
const appPath = path.join(rootPath, 'dist');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(serveStatic(appPath));
app.set('appPath', appPath);
app.use(passport.initialize());

// setup routes
require('./routes')(app);

app.listen(port, function () {
  console.log('Listening on port ' + port + ' in mode: ' + process.env.NODE_ENV);
});

// Expose app
module.exports = app;
