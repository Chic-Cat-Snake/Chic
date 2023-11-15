const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express(); //creates our server
app.use(express.json()); //this parses incoming json request 

// ROUTERS
const authRouter = require('./routes/auth.js');
const outfitsRouter = require('./routes/outfits.js');

// statically serve everything in the build folder on the route '/build'
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// USE ROUTES
app.use('/auth', authRouter);
app.use('/outfits', outfitsRouter);

app.get('/*', (req, res) => {
  return res.sendFile(path.join(__dirname, '../dist', '../index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
