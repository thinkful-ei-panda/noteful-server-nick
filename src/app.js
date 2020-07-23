/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const validateBearerToken = require('./validate-bearer-token');
const errorHandler = require('./error-handler');


const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

const foldersRouter = require('./folders/folders-router');
const notesRouter = require('./notes/notes-router');


app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// app.use(validateBearerToken);

app.use(foldersRouter);
app.use(notesRouter);

app.use(errorHandler);

module.exports = app;