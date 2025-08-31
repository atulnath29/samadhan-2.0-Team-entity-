// src/App.jsx
import TodoList from './components/TodoList';
import StudentDirectory from './components/StudentDirectory'; // Import the new component
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React Learning Journey</h1>
      <hr />

      <h2>Day 8: To-Do List</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TodoList />
      </div>

      <hr />

      <h2>Day 9: Fetching API Data</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StudentDirectory />
      </div>
    </div>
  );
}

export default App;
