import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '../../redux/libraryActions';
import Song from '../Song/Song';
import {
  SearchSection,
  SectionHeader,
  ResultsList,
  StatusBox,
  RetryBtn
} from './SearchResults.styles';

const SearchResults = ({ songs, loading, error, onRetry, currentArtist }) => {
  const dispatch = useDispatch();
  // Obtiene las canciones de la biblioteca desde Redux
  const librarySongs = useSelector((state) => state);

  const handleAddSong = (song) => {
    // Despacha la acción a Redux
    dispatch(addSong(song));
  };

  return (
    <SearchSection>
      <SectionHeader>
        <h2>Catálogo de Discos 🎵</h2>
        <p>
          Resultados obtenidos para: <strong>{currentArtist}</strong>
        </p>
      </SectionHeader>

      {loading && (
        <StatusBox>
          <p>⏳ Cargando información desde The Audio DB...</p>
        </StatusBox>
      )}

      {error && (
        <StatusBox isError>
          <p>❌ Hubo un problema al cargar los datos. Intenta nuevamente.</p>
          <RetryBtn onClick={onRetry}>Reintentar búsqueda</RetryBtn>
        </StatusBox>
      )}

      {!loading && !error && songs && songs.length > 0 && (
        <ResultsList>
          {songs.map((song) => {
            const isAlreadyInLibrary = librarySongs.some(
              (item) => item.id === song.id
            );

            return (
              <Song
                key={song.id}
                id={song.id}
                title={song.title}
                artist={song.artist}
                album={song.album}
                coverImg={song.coverImg}
                coverBg={song.coverBg}
                onAdd={() => handleAddSong(song)}
                isAdded={isAlreadyInLibrary}
              />
            );
          })}
        </ResultsList>
      )}

      {!loading && !error && (!songs || songs.length === 0) && (
        <StatusBox>
          <p>❌ No se encontraron álbumes para el artista ingresado.</p>
        </StatusBox>
      )}
    </SearchSection>
  );
};

export default SearchResults;