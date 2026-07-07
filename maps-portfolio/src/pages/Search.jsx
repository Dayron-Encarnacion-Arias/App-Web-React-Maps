import React, { useState, useCallback } from 'react';
import { searchPlaces } from '../services/geoApi';
import { useFetch } from '../hooks/useFetch';
import { SearchBar } from '../components/SearchBar';
import { MapView } from '../components/MapView';
import { PlaceCard } from '../components/PlaceCard';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';

export const Search = ({ favorites, onToggleFavorite }) => {
  const { data: places, loading, error, execute: triggerSearch } = useFetch(searchPlaces);
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Tema 4 — Lifting State Up: Captura de eventos desde componentes hijos para mutar estado raíz
  const handleSearchSubmit = (query) => {
    triggerSearch(query);
    setSelectedPlace(null);
  };

  // Tema 6 — Justificación de useCallback:
  // Se memoriza la función de selección para evitar que las cards rendericen de nuevo
  // innecesariamente cuando cambie el estado estructural del padre.
  const handleSelectPlace = useCallback((place) => {
    setSelectedPlace(place);
  }, []);

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <h2>Buscador de Ubicaciones</h2>
        <SearchBar onSearch={handleSearchSubmit} />

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {!loading && places.map((place) => {
            const isFav = favorites.some(fav => fav.id === place.id);
            return (
              <PlaceCard
                key={place.id}
                place={place}
                isFavorite={isFav}
                onToggleFavorite={onToggleFavorite}
                onSelect={handleSelectPlace}
              />
            );
          })}
          {!loading && places.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '20px' }}>
              Realiza una búsqueda para visualizar resultados geográficos.
            </p>
          )}
        </div>
      </div>

      <div className="map-content">
        <MapView places={places} activePlace={selectedPlace} />
      </div>
    </div>
  );
};