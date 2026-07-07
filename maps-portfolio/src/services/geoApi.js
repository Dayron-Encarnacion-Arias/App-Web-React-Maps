/**
 * Servicio encargado de gestionar las peticiones HTTP a la API pública de OpenStreetMap Nominatim.
 * Implementa Fetch API siguiendo las buenas prácticas de clean code.
 */
const BASE_URL = 'https://nominatim.openstreetmap.org/search';

export const searchPlaces = async (query) => {
  if (!query) return [];
  
  // Agregamos parámetros obligatorios de formato y localización para mapeo interactivo
  const url = `${BASE_URL}?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=10`;

  const response = await fetch(url, {
    headers: {
      'Accept-Language': 'es' // Forzar respuestas estructuradas en español
    }
  });

  if (!response.ok) {
    throw new Error('Error al conectar con el servicio de mapas. Inténtalo de nuevo.');
  }

  const data = await response.json();
  
  // Mapeamos la respuesta cruda a una estructura limpia para nuestra UI
  return data.map(item => ({
    id: item.place_id,
    name: item.name || item.display_name.split(',')[0],
    address: item.display_name,
    lat: parseFloat(item.lat),
    lon: parseFloat(item.lon),
    type: item.type,
    importance: item.importance
  }));
};