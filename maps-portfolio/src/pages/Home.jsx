import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-hero-container">
      <div className="hero-content">
        <h1>Explora el Mundo Digital con GeoMaps Lite</h1>
        <p>Una herramienta fluida, moderna y optimizada para la localización exacta de ubicaciones, gestión espacial en tiempo real y persistencia completa sin backend.</p>
        <div className="hero-actions">
          <button className="hero-btn primary" onClick={() => navigate('/search')}>Comenzar Búsqueda</button>
          <button className="hero-btn secondary" onClick={() => navigate('/favorites')}>Ver Mis Favoritos</button>
        </div>
      </div>
      <div className="hero-features-grid">
        <div className="feature-item"><h3>🌍 Mapas Vivos</h3><p>Renderizado interactivo potenciado con OpenStreetMap y Leaflet Engine.</p></div>
        <div className="feature-item"><h3>⚡ Alta Performance</h3><p>Memorización estructural mediante Hooks avanzados (useMemo, useCallback).</p></div>
        <div className="feature-item"><h3>💾 Persistencia Local</h3><p>Tus datos siempre a salvo gracias al almacenamiento en el LocalStorage de tu navegador.</p></div>
      </div>
    </div>
  );
};