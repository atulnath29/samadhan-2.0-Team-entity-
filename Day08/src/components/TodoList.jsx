// src/components/TodoList.jsx
import { useState } from 'react';

function TodoList() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn about React state' },
    { id: 2, text: 'Practice rendering lists' },
  ]);

  // State to hold the value of the input field
  const [inputValue, setInputValue] = useState('');

  const componentStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px 0',
    width: '400px',
  };

  const inputContainerStyle = {
    display: 'flex',
    marginBottom: '20px',
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    // Prevent adding empty tasks
    if (inputValue.trim() === '') return;

    const newTask = {
      id: Date.now(), // Simple unique ID
      text: inputValue,
    };

    // Add the new task to the existing tasks array
    setTasks([...tasks, newTask]);

    // Clear the input field
    setInputValue('');
  };

  return (
    <div style={componentStyle}>
      <h2>My To-Do List</h2>
      <div style={inputContainerStyle}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          style={{ flex: 1, padding: '10px', fontSize: '16px' }}
        />
        <button onClick={handleAddTask} style={{ padding: '10px' }}>
          Add Task
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              padding: '10px',
              borderBottom: '1px solid #eee',
              textAlign: 'left',
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
