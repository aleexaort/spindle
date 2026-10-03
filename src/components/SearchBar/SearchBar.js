import React, { useState } from 'react';
import {
  SearchForm,
  SearchIcon,
  SearchInput,
  SearchSubmitBtn
} from './SearchBar.styles';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      onSearch('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchIcon>🔍</SearchIcon>
      <SearchInput
        type="text"
        placeholder="Buscar artista (ej: Oasis, Coldplay...)"
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchSubmitBtn type="submit">Buscar</SearchSubmitBtn>
    </SearchForm>
  );
};

export default SearchBar;