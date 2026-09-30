import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Formulario para la búsqueda
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <form className="spindle-search-form" onSubmit={handleSubmit}>
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Buscar artista (ej: Daft Punk, Gorillaz...)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="search-submit-btn">Buscar</button>
    </form>
  );
};

export default SearchBar;