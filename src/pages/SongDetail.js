import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '../redux/slices/librarySlice';
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
  const dispatch = useDispatch();
  const [imgError, setImgError] = useState(false);

  // Canciones de la biblioteca para saber si ya fue agregado
  const librarySongs = useSelector((state) => state.library);

  const albumUrl = `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${id}`;
  const { data, loading, error, refetch } = useFetch(albumUrl);

  const albumFromApi = data?.album?.[0];
  const isAlreadyInLibrary = librarySongs.some((item) => item.id === id);

  const handleAdd = () => {
    if (albumFromApi) {
      dispatch(
        addSong({
          id: albumFromApi.idAlbum,
          title: albumFromApi.strAlbum,
          artist: albumFromApi.strArtist,
          album: albumFromApi.strAlbum,
          coverImg: albumFromApi.strAlbumThumb,
          coverBg: '#1e1b2e'
        })
      );
    }
  };

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

              <button 
                onClick={handleAdd}
                disabled={isAlreadyInLibrary}
                style={{
                  marginTop: '15px',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  border: 'none',
                  backgroundColor: isAlreadyInLibrary ? '#A0AEC0' : '#FF6584',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  cursor: isAlreadyInLibrary ? 'not-allowed' : 'pointer'
                }}
              >
                {isAlreadyInLibrary ? 'En mi biblioteca ✓' : '+ Agregar a mi biblioteca'}
              </button>
            </AlbumInfoStage>
          </AlbumDetailContent>
        )}
      </DetailMainCard>
    </DetailPageContainer>
  );
};

export default SongDetail;