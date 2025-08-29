// src/ProfileCard.jsx
// This is our reusable component for the mini-task!

// We receive 'props' as an argument, which is an object.
// Here, we are destructuring the props to get name, role, and team directly.
function ProfileCard({ name, role, team }) {
  // Some basic inline styling for the card
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    width: '250px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Team: {team}</p>
    </div>
  );
}

export default ProfileCard;
