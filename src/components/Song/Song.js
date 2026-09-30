import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Song.css';

const Song = ({ id, title, artist, album, coverImg, coverBg, onAdd, isAdded }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="vinyl-sleeve-card">
      <div className="cover-art" style={{ backgroundColor: coverBg || '#E2D9F3' }}>
        {coverImg && !imgError ? (
          <img 
            src={coverImg} 
            alt={title} 
            className="album-cover-img"
            onError={() => setImgError(true)} 
          />
        ) : (
          <div className="vinyl-center-sticker"></div>
        )}
      </div>

      <div className="vinyl-card-info">
        <Link to={`/song/${id}`} className="song-title-link">
          <h4 className="song-title">{title}</h4>
        </Link>
        <p className="song-artist">{artist}</p>
        <p className="song-meta">{album}</p>

        <div className="card-actions">
          <Link to={`/song/${id}`} className="details-link">Ver detalles ➔</Link>
          {onAdd && (
            <button 
              className={`spindle-pill-btn ${isAdded ? 'added' : ''}`} 
              onClick={onAdd}
              disabled={isAdded}
            >
              {isAdded ? 'En mi biblioteca ✓' : '+ Agregar'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Song;