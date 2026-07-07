import React, { useState, useMemo, useCallback } from 'react';
import { FavoriteList } from '../components/FavoriteList';
import { MapView } from '../components/MapView';

export const Favorites = ({ favorites, onRemoveFavorite }) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Tema 6 — Justificación de useMemo:
  // Filtra los favoritos en memoria de manera reactiva. Evita recalculaciones pesadas
  // al interactuar con el mapa o cambiar el tema global de la app.
  const filteredFavorites = useMemo(() => {
    return favorites.filter(place => 
      place.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      place.address.toLowerCase().includes(filterQuery.toLowerCase())
    );
  }, [favorites, filterQuery]);

  const handleSelectPlace = useCallback((place) => {
    setSelectedPlace(place);
  }, []);

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <h2>Mis Lugares Favoritos</h2>
        <input
          type="text"
          placeholder="Filtrar favoritos guardados..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            marginBottom: '15px',
            outline: 'none'
          }}
        />

        <div style={{ overflowY: 'auto', flex: 1 }}>
          <FavoriteList 
            favorites={filteredFavorites} 
            onRemoveFavorite={onRemoveFavorite} 
            onSelectPlace={handleSelectPlace}
          />
        </div>
      </div>

      <div className="map-content">
        <MapView places={filteredFavorites} activePlace={selectedPlace} />
      </div>
    </div>
  );
};