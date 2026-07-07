import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import './Navbar.css';

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-logo">📍</span>
        <h1>GeoMaps Lite</h1>
      </div>
      <div className="navbar-links">
        {/* NavLink inyecta automáticamente la propiedad isActive para estilos dinámicos */}
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          Inicio
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          Buscar
        </NavLink>
        <NavLink to="/favorites" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          Favoritos
        </NavLink>
      </div>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
      </button>
    </nav>
  );
};