// index.js
// My first CRUD API with Express!

const express = require('express');
const app = express();
const port = 3000;

// This middleware is needed to parse JSON from the request body
app.use(express.json());

// Using a simple array as an in-memory database
let students = [
    { id: 1, name: "Atul Nath", course: "B.Tech CSE" },
    { id: 2, name: "Ankit Kumar", course: "Full Stack Development" },
    { id: 3, name: "Nimish Tiwari, course: "UI/UX Design" }
];

// --- ROUTES ---

// 1. GET /students - READ all students
app.get('/students', (req, res) => {
    res.json(students);
});

// 2. GET /students/:id - READ a single student by ID
app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});

// 3. POST /students - CREATE a new student
app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1, // Simple ID generation
        name: req.body.name,
        course: req.body.course
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// 4. PUT /students/:id - UPDATE a student
app.put('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (student) {
        student.name = req.body.name || student.name;
        student.course = req.body.course || student.course;
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});

// 5. DELETE /students/:id - DELETE a student
app.delete('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === studentId);

    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
        res.status(200).send('Student deleted successfully');
    } else {
        res.status(404).send('Student not found');
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
