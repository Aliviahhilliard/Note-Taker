const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('./fsUtils');
const router = express.Router();

// Serve the notes.html file
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Fetch notes
router.get('/api/notes', async (req, res) => {
  try {
    const data = await readFromFile('db/notes.json');
    return res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

// Create a new note
router.post('/api/notes', (req, res) => {
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  readAndAppend(newNote, 'db/notes.json');
  res.json(newNote);
});

// Delete a note by ID
router.delete('/api/notes/:id', async (req, res) => {
  const noteId = req.params.id;
  try {
    const data = await readFromFile('db/notes.json');
    let notes = JSON.parse(data);
    notes = notes.filter(note => note.id !== noteId);
    writeToFile('db/notes.json', notes);
    res.status(200).send("Note deleted");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
