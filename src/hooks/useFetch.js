import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!url) return;
    setLoading(true);
    setError(null);

    try {
      // Petición TheAudioDB
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error de respuesta HTTP: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("Error al consumir TheAudioDB API:", err);
      setError("Hubo un problema al cargar los datos. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;