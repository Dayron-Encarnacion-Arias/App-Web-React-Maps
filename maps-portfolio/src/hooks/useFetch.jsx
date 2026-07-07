import { useState, useEffect, useCallback } from 'react';

/**
 * Custom Hook encargado de gestionar estados asíncronos uniformes (Data, Loading, Error).
 */
export const useFetch = (fetchFunction) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Memorizamos la ejecución para prevenir bucles infinitos en useEffects externos
  const execute = useCallback(async (...params) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFunction(...params);
      setData(result);
      return result;
    } catch (err) {
      setError(err.message || 'Ha ocurrido un error inesperado');
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  return { data, loading, error, execute, setData };
};