import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Tema inicial obtenido desde localStorage o defecto claro
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('global-theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('global-theme', theme);
    // Mutamos la clase de body para control global desde CSS
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};