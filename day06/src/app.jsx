// This is the main component where we will use our ProfileCard.
// src/App.jsx
// 1. Import the ProfileCard component
import ProfileCard from './ProfileCard';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <h1>Meet Our Team: Team entity.. </h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* 2. Use the component and pass props */}
        <ProfileCard
          name="Atul Nath"
          role="Team Lead / Frontend & Backend "
          team="Team entity.."
        />
        <ProfileCard
          name="Ankit Kumar"
          role="Full Stack Enthusiast"
          team="Team entity.."
        />
        <ProfileCard
          name="Nimish Tiwari"
          role="Design"
          team="Team entity.."
        />
      </div>
    </div>
  );
}

export default App;
