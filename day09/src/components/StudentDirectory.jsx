// src/components/StudentDirectory.jsx
import { useState, useEffect } from 'react';

function StudentDirectory() {
  // State to store the list of students
  const [students, setStudents] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // The URL of our backend API from Day 5
    const apiUrl = 'http://localhost:3000/api/students';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setStudents(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, []); // The empty array means this effect runs only once

  const componentStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px 0',
    width: '400px',
  };

  return (
    <div style={componentStyle}>
      <h2>Student Directory</h2>
      <p>Data fetched from Express backend!</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {students.map((student) => (
          <li key={student.id} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
            <strong>{student.name}</strong> (Team: {student.team})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDirectory;
