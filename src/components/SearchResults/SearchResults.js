import React from 'react';
import Song from '../Song/Song';
import './SearchResults.css';

const SearchResults = ({ songs, onAddSong, librarySongs }) => {
  return (
    <section className="search-section">
      <div className="section-header">
        <h2>Catálogo de Discos 🎵</h2>
        <p className="subtitle">Elige un vinilo y guárdalo en tu colección personalizada.</p>
      </div>

      <div className="results-list">
        {songs.map((song) => {
          const isAlreadyInLibrary = librarySongs.some(
            (item) => item.id === song.id
          );

          return (
            <Song
              key={song.id}
              title={song.title}
              artist={song.artist}
              album={song.album}
              duration={song.duration}
              coverBg={song.coverBg}
              onAdd={() => onAddSong(song)}
              isAdded={isAlreadyInLibrary}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SearchResults;