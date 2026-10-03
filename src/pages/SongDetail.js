import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import useFetch from '../hooks/useFetch';
import {
  DetailPageContainer,
  DetailMainCard,
  BackButton,
  AlbumDetailContent,
  AlbumCoverStage,
  DetailCoverImg,
  AlbumInfoStage,
  GenrePill,
  DetailAlbumTitle,
  DetailArtistName,
  DetailMetaGrid,
  AlbumDescription,
  StatusNotice
} from './SongDetail.styles';

const SongDetail = () => {
  const { id } = useParams();
  const [imgError, setImgError] = useState(false);

  const albumUrl = `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${id}`;
  const { data, loading, error, refetch } = useFetch(albumUrl);

  const albumFromApi = data?.album?.[0];

  return (
    <DetailPageContainer>
      <Header />

      <DetailMainCard>
        <BackButton to="/">⬅ Volver al catálogo</BackButton>

        {/* Carga */}
        {loading && (
          <StatusNotice>
            <p>⏳ Cargando detalles del disco...</p>
          </StatusNotice>
        )}

        {/* Error en la petición API */}
        {!loading && error && (
          <StatusNotice isError>
            <p>❌ Ocurrió un problema al obtener los detalles del álbum.</p>
            <button onClick={refetch}>Reintentar consulta</button>
          </StatusNotice>
        )}

        {/* Álbum No Encontrado */}
        {!loading && !error && !albumFromApi && (
          <StatusNotice>
            <p>🔍 No se encontró ningún álbum registrado con ese identificador.</p>
          </StatusNotice>
        )}

        {/* Detalle del Álbum */}
        {!loading && !error && albumFromApi && (
          <AlbumDetailContent>
            <AlbumCoverStage>
              {albumFromApi.strAlbumThumb && !imgError ? (
                <DetailCoverImg 
                  src={albumFromApi.strAlbumThumb} 
                  alt={albumFromApi.strAlbum} 
                  onError={() => setImgError(true)}
                />
              ) : (
                <div 
                  style={{ 
                    backgroundColor: '#FFE082',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div 
                    style={{
                      width: '90px',
                      height: '90px',
                      backgroundColor: '#FF6584',
                      borderRadius: '50%',
                      border: '8px solid #FFFFFF'
                    }}
                  />
                </div>
              )}
            </AlbumCoverStage>

            <AlbumInfoStage>
              <GenrePill>{albumFromApi.strGenre || 'Alternative Pop'}</GenrePill>
              <DetailAlbumTitle>{albumFromApi.strAlbum || 'Álbum Musical'}</DetailAlbumTitle>
              <DetailArtistName>Por {albumFromApi.strArtist || 'Artista Destacado'}</DetailArtistName>
              
              <DetailMetaGrid>
                <p><strong>Año de lanzamiento:</strong> {albumFromApi.intYearReleased || 'N/A'}</p>
              </DetailMetaGrid>

              <AlbumDescription>
                <h3>Reseña:</h3>
                <p>
                  {albumFromApi.strDescriptionES || albumFromApi.strDescriptionEN || 'Disco destacado en la biblioteca Spindle.'}
                </p>
              </AlbumDescription>
            </AlbumInfoStage>
          </AlbumDetailContent>
        )}
      </DetailMainCard>
    </DetailPageContainer>
  );
};

export default SongDetail;