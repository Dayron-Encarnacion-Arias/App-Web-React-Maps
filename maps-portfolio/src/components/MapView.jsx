import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import './MapView.css';

// Reparación nativa de bugs estáticos de iconos en Leaflet dentro de entornos empaquetados por Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Componente helper interno encargado del manejo dinámico de la cámara del mapa (FlyTo)
const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 13, { animate: true, duration: 1.5 });
    }
  }, [center, map]);
  return null;
};

export const MapView = ({ places = [], activePlace = null }) => {
  // Posición inicial por defecto (Madrid, España)
  const defaultCenter = [40.416775, -3.703790];
  
  const getCenter = () => {
    if (activePlace) return [activePlace.lat, activePlace.lon];
    if (places.length > 0) return [places[0].lat, places[0].lon];
    return defaultCenter;
  };

  const center = getCenter();

  return (
    <div className="map-wrapper">
      <MapContainer center={center} zoom={6} scrollWheelZoom={true} className="leaflet-map-container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView center={center} />
        {places.map((place) => (
          <Marker key={place.id} position={[place.lat, place.lon]}>
            <Popup>
              <div className="map-popup-content">
                <strong>{place.name}</strong>
                <p>{place.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};