import React from 'react';
import { PlaceCard } from './PlaceCard';

export const FavoriteList = ({ favorites, onRemoveFavorite, onSelectPlace }) => {
  if (favorites.length === 0) {
    return <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '20px' }}>No hay lugares guardados en esta sección.</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'col', gap: '15px', width: '100%' }}>
      {favorites.map(place => (
        <PlaceCard
          key={place.id}
          place={place}
          isFavorite={true}
          onToggleFavorite={onRemoveFavorite}
          onSelect={onSelectPlace}
        />
      ))}
    </div>
  );
};