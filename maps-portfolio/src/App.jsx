import React, { useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useLocalStorage } from './hooks/useLocalStorage';

// Componentes estructurales
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Páginas
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Favorites } from './pages/Favorites';
import { PlaceDetail } from './pages/PlaceDetail';
import { NotFound } from './pages/NotFound';

function App() {
  // Manejo del estado global de Favoritos delegando la persistencia directa a nuestro custom hook
  const [favorites, setFavorites] = useLocalStorage('user-favorites', []);

  // Operación CRUD parcial (Create / Delete) estructurada óptimamente con useCallback
  const handleToggleFavorite = useCallback((place) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((item) => item.id === place.id);
      if (exists) {
        // Operación Delete utilizando .filter() tal como se solicita
        return prevFavorites.filter((item) => item.id !== place.id);
      } else {
        // Operación Create anexando objeto estructurado
        return [...prevFavorites, place];
      }
    });
  }, [setFavorites]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route 
                path="/search" 
                element={<Search favorites={favorites} onToggleFavorite={handleToggleFavorite} />} 
              />
              <Route 
                path="/favorites" 
                element={<Favorites favorites={favorites} onRemoveFavorite={handleToggleFavorite} />} 
              />
              {/* Ruta dinámica */}
              <Route path="/place/:id" element={<PlaceDetail />} />
              {/* Control de error 404 global */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
