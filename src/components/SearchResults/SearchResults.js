import React from 'react';
import Song from '../Song/Song';
import './SearchResults.css';

const SearchResults = ({ songs, onAddSong, librarySongs, loading, error, onRetry, currentArtist }) => {
  return (
    <section className="search-section">
      <div className="section-header">
        <h2>Catálogo de Discos 🎵</h2>
        <p className="subtitle">
          Resultados obtenidos para: <strong>{currentArtist}</strong>
        </p>
      </div>

      {/* Estado de Carga */}
      {loading && (
        <div className="status-box loading-box">
          <p>⏳ Cargando información desde The Audio DB...</p>
        </div>
      )}

      {/* Estado de Error */}
      {error && (
        <div className="status-box error-box">
          <p>❌ Hubo un problema al cargar los datos. Intenta nuevamente.</p>
          <button className="retry-btn" onClick={onRetry}>Reintentar búsqueda</button>
        </div>
      )}

      {/* Renderizado de Lista solo cuando los datos estén listos */}
      {!loading && !error && songs && songs.length > 0 && (
        <div className="results-list">
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
                onAdd={() => onAddSong(song)}
                isAdded={isAlreadyInLibrary}
              />
            );
          })}
        </div>
      )}

      {/* Si no se encuentran resultados */}
      {!loading && !error && (!songs || songs.length === 0) && (
        <div className="status-box empty-search">
          <p>No se encontraron álbumes para el artista ingresado.</p>
        </div>
      )}
    </section>
  );
};

export default SearchResults;