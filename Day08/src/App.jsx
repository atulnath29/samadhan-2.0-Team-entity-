// src/App.jsx
import Counter from './components/Counter';
import LivePreview from './components/LivePreview';
import TodoList from './components/TodoList'; // Import the new component
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React Learning Journey</h1>
      <hr />

      <h2>Day 7: State Management</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Counter />
        <LivePreview />
      </div>

      <hr />

      <h2>Day 8: Lists & Events</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
