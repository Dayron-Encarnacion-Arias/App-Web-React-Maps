import { useState, useEffect } from 'react';

/**
 * Custom Hook genérico para automatizar operaciones CRUD directas en LocalStorage.
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error leyendo la clave "${key}" en localStorage:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error guardando la clave "${key}" en localStorage:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};