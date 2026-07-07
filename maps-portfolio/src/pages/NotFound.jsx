import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      textAlign: 'center',
      gap: '20px'
    }}>
      <h1 style={{ fontSize: '6rem', color: 'var(--accent)' }}>404</h1>
      <h2>Ruta no cartografiada</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '500px' }}>
        El lugar o la página web a la que intentas acceder no existe en nuestro sistema de navegación por coordenadas.
      </p>
      <button 
        onClick={() => navigate('/')}
        style={{
          padding: '12px 24px',
          background: 'var(--accent)',
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'var(--transition)'
        }}
      >
        Volver a la Base Seguro
      </button>
    </div>
  );
};