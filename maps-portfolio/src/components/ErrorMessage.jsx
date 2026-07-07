import React from 'react';

export const ErrorMessage = ({ message }) => (
  <div style={{
    padding: '15px',
    backgroundColor: 'rgba(217, 48, 37, 0.1)',
    color: '#d93025',
    borderRadius: '8px',
    border: '1px solid rgba(217, 48, 37, 0.2)',
    margin: '10px 0',
    fontSize: '0.95rem'
  }}>
    ⚠️ <strong>Error del sistema:</strong> {message}
  </div>
);