import React from 'react';
import Song from '../Song/Song';
import './Library.css';

const Library = ({ librarySongs }) => {
  return (
    <section className="library-section">
      <div className="library-card-wrapper">
        <div className="section-header">
          <h2>Mi Biblioteca 📚</h2>
          <span className="count-badge">{librarySongs.length} guardadas</span>
        </div>

        {librarySongs.length === 0 ? (
          <div className="empty-state">
            <div className="empty-vinyl-icon">📀</div>
            <p className="empty-title">Tu biblioteca está vacía</p>
            <p className="empty-sub">Busca un artista y agrega álbumes a tu colección.</p>
          </div>
        ) : (
          <div className="library-list">
            {librarySongs.map((song) => (
              <Song
                key={song.id}
                id={song.id}
                title={song.title}
                artist={song.artist}
                album={song.album}
                coverImg={song.coverImg}
                coverBg={song.coverBg}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Library;