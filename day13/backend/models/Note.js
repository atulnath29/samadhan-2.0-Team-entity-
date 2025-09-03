// backend/models/Note.js
const mongoose = require('mongoose');

// This is the schema - the structure of our data
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// The model is the interface we'll use to interact with the 'notes' collection
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
