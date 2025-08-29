// src/App.jsx
import ProfileCard from './ProfileCard'; // Assuming this is from Day 6
import Counter from './components/Counter'; // Import Counter
import LivePreview from './components/LivePreview'; // Import LivePreview
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Day 6 Task: Profile Cards</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <ProfileCard name="Atul Nath" role="Team Lead" team="Team entity.." />
        <ProfileCard name="Ankit Kumar" role="Full Stack" team="Team entity.." />
        <ProfileCard name="Nimish Tiwari" role="Design" team="Team entity.." />
      </div>

      <hr style={{ margin: '40px 0' }} />

      <h1>Day 7 Task: State Management</h1>
      <Counter />
      <LivePreview />
    </div>
  );
}

export default App;
