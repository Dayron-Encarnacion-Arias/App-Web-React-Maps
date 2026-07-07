import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlaceCard.css';

export const PlaceCard = ({ place, isFavorite, onToggleFavorite, onSelect }) => {
  const navigate = useNavigate();

  return (
    <div className="place-card" onClick={() => onSelect && onSelect(place)}>
      <div className="place-card-body">
        <h3 className="place-title">{place.name}</h3>
        <p className="place-address">{place.address}</p>
        <span className="place-coords">📍 {place.lat.toFixed(4)}, {place.lon.toFixed(4)}</span>
      </div>
      <div className="place-card-actions" onClick={(e) => e.stopPropagation()}>
        <button 
          className={`btn-fav ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(place)}
        >
          {isFavorite ? '❤️ Quitar' : '🤍 Favorito'}
        </button>
        <button 
          className="btn-details"
          onClick={() => navigate(`/place/${place.id}`, { state: { place } })}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};