// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:4000';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Fetch all notes from the backend
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(`${API_URL}/notes`);
      const data = await response.json();
      setNotes(data);
    };
    fetchNotes();
  }, []);

  // Handle adding a new note
  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const response = await fetch(`${API_URL}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    const newNote = await response.json();
    setNotes([newNote, ...notes]); // Add new note to the top of the list
    setTitle('');
    setContent('');
  };

  // Handle deleting a note
  const handleDeleteNote = async (id) => {
    await fetch(`${API_URL}/notes/${id}`, {
      method: 'DELETE',
    });
    setNotes(notes.filter(note => note._id !== id)); // Mongoose uses _id
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes App (with DB!)</h1>
        <form onSubmit={handleAddNote}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Note content..."
            required
          ></textarea>
          <button type="submit">Add Note</button>
        </form>
        <div className="notes-list">
          {notes.map(note => (
            <div key={note._id} className="note">
              <h2>{note.title}</h2>
              <p>{note.content}</p>
              <button onClick={() => handleDeleteNote(note._id)}>Delete</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
