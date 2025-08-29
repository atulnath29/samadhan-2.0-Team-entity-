// src/components/LivePreview.jsx
import { useState } from 'react';

function LivePreview() {
  // Initialize a state variable 'text' with an empty string
  const [text, setText] = useState('');

  const componentStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px 0',
    textAlign: 'center',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    width: '80%',
  };

  // This function is called every time the input value changes
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={componentStyle}>
      <h2>Live Text Preview</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
        style={inputStyle}
      />
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        <strong>Preview:</strong> {text}
      </p>
    </div>
  );
}

export default LivePreview;
