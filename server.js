const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('./fsUtils');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static('public'));

// GET /notes returns the notes.html file
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// GET /api/notes reads db.json and returns all saved notes as JSON
app.get('/api/notes', (req, res) => {
  readFromFile('./db.json').then((data) => res.json(JSON.parse(data)));
});

// POST /api/notes receives new note, adds to db.json, returns new note
app.post('/api/notes', (req, res) => {
  const { title, text } = req.body;
  const newNote = { title, text, id: uuid.v4() };

  readAndAppend(newNote, './db.json');
  res.json(newNote);
});

// GET * returns index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
