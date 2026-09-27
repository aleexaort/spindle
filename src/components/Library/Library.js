import React from 'react';
import Song from '../Song/Song';
import './Library.css';

const Library = ({ librarySongs }) => {
  return (
    <section className="library-section">
      <div className="library-card-wrapper">
        <div className="section-header">
          <h2>Your Library 📚</h2>
          <span className="count-badge">{librarySongs.length} tracks</span>
        </div>

        {librarySongs.length === 0 ? (
          <div className="empty-state">
            <div className="empty-vinyl-icon">📀</div>
            <p className="empty-title">Your crate is empty</p>
            <p className="empty-sub">Add songs from the catalog to build your Danish Pastel collection.</p>
          </div>
        ) : (
          <div className="library-list">
            {librarySongs.map((song) => (
              <Song
                key={song.id}
                title={song.title}
                artist={song.artist}
                album={song.album}
                duration={song.duration}
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