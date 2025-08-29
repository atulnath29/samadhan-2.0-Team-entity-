// app.js - Learning the basics of Express.js

// 1. Import Express
const express = require('express');

// 2. Initialize the Express app
const app = express();
const PORT = 3000;

// 3. Create some mock student data for the mini-task
// Using our team "Syntax Solvers" as examples!
const students = [
    { id: 1, name: 'Atul Nath', team: 'Syntax Solvers' },
    { id: 2, name: 'Ankit Kumar', team: 'Syntax Solvers' },
    { id: 3, name: 'Nimish Tiwari', team: 'Syntax Solvers' }
];

// 4. Define Routes

// A simple GET route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to my Student API using Express!');
});

// Mini Task: A GET route to return all students as JSON
app.get('/api/students', (req, res) => {
    res.json(students);
});

// A simple POST route to simulate adding a new student
// Note: To actually get data from the request body, we'll need middleware later on.
app.post('/api/students', (req, res) => {
    // In a real app, we would add a new student to our database here.
    res.send('Student added successfully! (This is a simulation)');
});


// 5. Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
