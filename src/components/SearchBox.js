import React from 'react';

export default function SearchBox() {
  return (
    <div style={{ 
      background: 'limegreen', 
      padding: '10px',
      margin: '10px 0'
    }}>
      <h2>SearchBox Component</h2>
      <input type="text" placeholder="Test input" />
      <button>Test Button</button>
    </div>
  );
}