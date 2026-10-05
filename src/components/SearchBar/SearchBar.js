import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSongs, resetResults } from '../../redux/slices/searchSlice';
import {
  SearchForm,
  SearchIcon,
  SearchInput,
  SearchSubmitBtn
} from './SearchBar.styles';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      dispatch(resetResults());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(fetchSongs(searchTerm.trim()));
    }
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