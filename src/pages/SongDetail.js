import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import useFetch from '../hooks/useFetch';
import './SongDetail.css';

const SongDetail = () => {
  const { id } = useParams();
  const [imgError, setImgError] = useState(false);

  const albumUrl = `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`;
  const { data, loading } = useFetch(albumUrl);

  const albumFromApi = data?.album?.[0];

  const displayAlbum = albumFromApi ? {
    strAlbum: albumFromApi.strAlbum,
    strArtist: albumFromApi.strArtist,
    strGenre: albumFromApi.strGenre || 'Pop / Alternative',
    intYearReleased: albumFromApi.intYearReleased || '2021',
    strAlbumThumb: albumFromApi.strAlbumThumb,
    strDescriptionES: albumFromApi.strDescriptionES || albumFromApi.strDescriptionEN,
  } : {
    strAlbum: 'Disco Spindle Collection',
    strArtist: 'Artista Destacado',
    strGenre: 'Indie Pop / Synthwave',
    intYearReleased: '2022',
    strAlbumThumb: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
    strDescriptionES: 'Álbum seleccionado de la colección de vinilos Spindle. Sonido analógico con producción moderna.',
  };

  return (
    <div className="detail-page-container">
      <Header />

      <main className="detail-main-card">
        <Link to="/" className="back-btn">⬅ Volver al catálogo</Link>

        {loading ? (
          <div className="detail-status">
            <p>⏳ Cargando detalles del disco...</p>
          </div>
        ) : (
          <div className="album-detail-content">
            <div className="album-cover-stage">
              {displayAlbum.strAlbumThumb && !imgError ? (
                <img 
                  src={displayAlbum.strAlbumThumb} 
                  alt={displayAlbum.strAlbum} 
                  className="detail-cover-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div style={{ padding: '60px', textAlign: 'center', backgroundColor: '#E2D9F3' }}>
                  <span style={{ fontSize: '3rem' }}>📀</span>
                </div>
              )}
            </div>

            <div className="album-info-stage">
              <span className="genre-pill">{displayAlbum.strGenre}</span>
              <h1 className="detail-album-title">{displayAlbum.strAlbum}</h1>
              <h2 className="detail-artist-name">Por {displayAlbum.strArtist}</h2>
              
              <div className="detail-meta-grid">
                <p><strong>Año de lanzamiento:</strong> {displayAlbum.intYearReleased}</p>
              </div>

              <div className="album-description">
                <h3>Reseña:</h3>
                <p>{displayAlbum.strDescriptionES || 'Disco destacado en la biblioteca Spindle.'}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SongDetail;