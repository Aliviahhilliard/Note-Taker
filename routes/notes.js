const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils'); // adjust the path as needed

const router = express.Router();

// Serve the notes.html file
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../public/notes.html');  
  res.sendFile(filePath); 
});  // Added missing closing parenthesis

// Fetch notes
router.get('/api/notes', async (req, res) => {
  try {
    const data = await readFromFile('../db/notes.json'); // adjust the path as needed
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
  readAndAppend(newNote, '../db/notes.json'); // adjust the path as needed
  res.json(newNote);
});

// Delete a note by ID
router.delete('/api/notes/:id', async (req, res) => {
  const noteId = req.params.id;
  try {
    const data = await readFromFile('../db/notes.json'); // adjust the path as needed
    let notes = JSON.parse(data);
    notes = notes.filter(note => note.id !== noteId);
    writeToFile('../db/notes.json', notes); // adjust the path as needed
    res.status(200).send("Note deleted");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
