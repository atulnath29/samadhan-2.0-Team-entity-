// backend/index.js
// API for our To-Do app

const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 4000; // Using a different port from the React app

// --- Middleware ---
app.use(cors()); // This allows the frontend to make requests to this API
app.use(express.json()); // To parse JSON request bodies

// --- In-Memory Database ---
let todos = [
    { id: 1, text: "Learn Node.js Backend" },
    { id: 2, text: "Learn React Frontend" },
    { id: 3, text: "Connect Frontend to Backend" },
];
let nextId = 4;

// --- Routes ---

// GET /todos - Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// POST /todos - Add a new todo
app.post('/todos', (req, res) => {
    const newTodo = {
        id: nextId++,
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// DELETE /todos/:id - Delete a todo
app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== todoId);
    res.status(200).send('Todo deleted successfully');
});

// Start the server
app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
