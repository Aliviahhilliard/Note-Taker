// Import required modules
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const fs = require('fs');
const notesRouter = require('./routes/notes.js');

// Initialize express app
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up API routes
app.use('/api', api);

// Serve static files from 'public' directory
app.use(express.static('public'));

// Set up main application route
app.use('/', notesRouter);

// Define the listening port; default to 3001
const mPORT = process.env.PORT || 3001;

// Start the server
app.listen(mPORT, () =>
  console.log(`App listening at http://localhost:${mPORT} 🚀`)
);

// Fallback route for undefined paths
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});