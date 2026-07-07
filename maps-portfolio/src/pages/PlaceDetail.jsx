import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { MapView } from '../components/MapView';

export const PlaceDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [place, setPlace] = useState(location.state?.place || null);

  useEffect(() => {
    // Si el usuario recarga la página directamente en la URL dinámica, 
    // recuperamos la información desde los favoritos del localStorage.
    if (!place) {
      const stored = JSON.parse(localStorage.getItem('user-favorites') || '[]');
      const found = stored.find(item => item.id.toString() === id.toString());
      setPlace(found || null);
    }
  }, [id, place]);

  if (!place) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h3>Ubicación no encontrada</h3>
        <p>No se disponen de datos en memoria para el ID especificado.</p>
        <button 
          onClick={() => navigate('/search')} 
          style={{ padding: '10px 20px', marginTop: '15px', background: 'var(--accent)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Volver al buscador
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ width: 'fit-content', padding: '8px 16px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '6px', cursor: 'pointer' }}
      >
        ⬅️ Volver atrás
      </button>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent)' }}>{place.name}</h2>
          <hr style={{ borderColor: 'var(--border-color)' }} />
          <p><strong>Dirección Completa:</strong> {place.address}</p>
          <p><strong>Latitud:</strong> {place.lat}</p>
          <p><strong>Longitud:</strong> {place.lon}</p>
          <p><strong>ID Técnico OSM:</strong> {place.id}</p>
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <strong>Nota Académica:</strong> Esta vista detallada procesa parámetros de ruta dinámica (<code>/place/:id</code>) leyendo estados síncronos del enrutador o resguardos del <code>localStorage</code>.
          </div>
        </div>
        <div style={{ height: '450px' }}>
          <MapView places={[place]} activePlace={place} />
        </div>
      </div>
    </div>
  );
};