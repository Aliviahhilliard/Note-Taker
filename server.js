const express = require('express');
const path = require('path');
const notesRouter = require('./notes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use notes router for all /notes routes
app.use('/notes', notesRouter);

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the index.html file for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
