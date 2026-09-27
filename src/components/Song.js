import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { title, artist, duration, album } = this.props;

    return (
      <div className="song-card">
        <div className="song-info">
          <h3 className="song-title">{title}</h3>
          <p className="song-artist">{artist}</p>
          <p className="song-meta">{album} • {duration}</p>
        </div>
      </div>
    );
  }
}

export default Song;