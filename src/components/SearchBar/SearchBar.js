import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Si se borra todo el texto, regresa al menú principal
    if (value.trim() === '') {
      onSearch('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
    <form className="spindle-search-form" onSubmit={handleSubmit}>
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Buscar artista (ej: Oasis, Coldplay...)"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className="search-submit-btn">Buscar</button>
    </form>
  );
};

export default SearchBar;