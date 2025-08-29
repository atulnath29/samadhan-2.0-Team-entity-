// src/components/Counter.jsx
import { useState } from 'react';

function Counter() {
  // Initialize a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  const componentStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px 0',
    textAlign: 'center',
  };

  const buttonStyle = {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '16px',
  };

  return (
    <div style={componentStyle}>
      <h2>Counter</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{count}</p>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
