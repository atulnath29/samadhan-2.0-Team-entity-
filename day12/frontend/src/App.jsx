// frontend/src/App.js
// The main component for our To-Do App

import React, { useState, useEffect } from 'react';
import './App.css'; // You can add some basic styling here

// The backend API is on port 4000
const API_URL = 'http://localhost:4000';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // useEffect to fetch todos when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(`${API_URL}/todos`);
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []); // Empty array means this runs only once on mount

  // Handle adding a new todo
  const handleAddTodo = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    if (!inputValue.trim()) return; // Don't add empty todos

    const response = await fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: inputValue }),
    });

    const newTodo = await response.json();
    setTodos([...todos, newTodo]); // Add the new todo to our state
    setInputValue(''); // Clear the input box
  };

  // Handle deleting a todo
  const handleDeleteTodo = async (id) => {
    await fetch(`${API_URL}/todos/${id}`, {
      method: 'DELETE',
    });
    // Filter out the deleted todo from our state
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Full-Stack To-Do App</h1>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
          />
          <button type="submit">Add To-Do</button>
        </form>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
