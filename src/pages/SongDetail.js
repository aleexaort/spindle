import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import useFetch from '../hooks/useFetch';
import './SongDetail.css';

const SongDetail = () => {
  const { id } = useParams();
  const [imgError, setImgError] = useState(false);

  const albumUrl = `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${id}`;
  const { data, loading } = useFetch(albumUrl);

  const albumFromApi = data?.album?.[0];

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
              {albumFromApi?.strAlbumThumb && !imgError ? (
                <img 
                  src={albumFromApi.strAlbumThumb} 
                  alt={albumFromApi.strAlbum} 
                  className="detail-cover-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div 
                  className="vinyl-sleeve-detail-fallback" 
                  style={{ 
                    backgroundColor: '#FFE082',
                    width: '280px',
                    height: '280px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                  }}
                >
                  <div 
                    style={{
                      width: '90px',
                      height: '90px',
                      backgroundColor: '#FF6584',
                      borderRadius: '50%',
                      border: '8px solid #FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                  >
                    <div style={{ width: '20px', height: '20px', backgroundColor: '#FFFFFF', borderRadius: '50%' }}></div>
                  </div>
                </div>
              )}
            </div>

            <div className="album-info-stage">
              <span className="genre-pill">{albumFromApi?.strGenre || 'Alternative Pop'}</span>
              <h1 className="detail-album-title">{albumFromApi?.strAlbum || 'Álbum Musical'}</h1>
              <h2 className="detail-artist-name">Por {albumFromApi?.strArtist || 'Artista Destacado'}</h2>
              
              <div className="detail-meta-grid">
                <p><strong>Año de lanzamiento:</strong> {albumFromApi?.intYearReleased || 'N/A'}</p>
              </div>

              <div className="album-description">
                <h3>Reseña:</h3>
                <p>
                  {albumFromApi?.strDescriptionES || albumFromApi?.strDescriptionEN || 'Disco destacado en la biblioteca Spindle.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SongDetail;