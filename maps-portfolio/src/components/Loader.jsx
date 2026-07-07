import React from 'react';
import './Loader.css';

export const Loader = () => (
  <div className="loader-container">
    <div className="spinner"></div>
    <p>Buscando localizaciones geográficas...</p>
  </div>
);