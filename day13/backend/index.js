// backend/index.js
require('dotenv').config(); // To load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Note = require('./models/Note'); // Import our Note model

const app = express();
const port = 4000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch(err => console.error("MongoDB connection error:", err));

// --- API Routes (now using Mongoose) ---

// GET /notes - Read all notes
app.get('/notes', async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 }); // Get newest first
  res.json(notes);
});

// POST /notes - Create a new note
app.post('/notes', async (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  const savedNote = await newNote.save();
  res.status(201).json(savedNote);
});

// DELETE /notes/:id - Delete a note
app.delete('/notes/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.status(200).send('Note deleted successfully');
});

// Start server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
