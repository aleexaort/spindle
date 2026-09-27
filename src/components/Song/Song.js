import React from 'react';
import './Song.css';

const Song = ({ title, artist, album, duration, coverBg, onAdd, isAdded }) => {
  return (
    <div className="vinyl-sleeve-card">
      {/* Portada decorativa estilo funda de vinilo pastel */}
      <div className="cover-art" style={{ backgroundColor: coverBg || '#E6F0FA' }}>
        <div className="vinyl-center-sticker"></div>
      </div>

      <div className="vinyl-card-info">
        <h4 className="song-title">{title}</h4>
        <p className="song-artist">{artist}</p>
        <p className="song-meta">{album} • {duration}</p>

        {onAdd && (
          <button 
            className={`spindle-pill-btn ${isAdded ? 'added' : ''}`} 
            onClick={onAdd}
            disabled={isAdded}
          >
            {isAdded ? 'In Library ✓' : '+ Add to Library'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Song;