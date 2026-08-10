require('express-async-errors'); // must be required before routes so async errors are caught
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const routes = require('./routes');
const { errorHandler, notFound } = require('./middleware/errorHandler');

const app = express();

// Security & parsing middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  credentials: true
}));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// API routes
app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to the TravelBharat API' });
});

// 404 + error handling (must be last)
app.use(notFound);
app.use(errorHandler);

module.exports = app;
