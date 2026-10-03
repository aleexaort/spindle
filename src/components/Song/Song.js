import React, { useState } from 'react';
import {
  VinylSleeveCard,
  CoverArt,
  AlbumCoverImg,
  VinylCenterSticker,
  VinylCardInfo,
  SongTitleLink,
  SongTitle,
  SongArtist,
  SongMeta,
  CardActions,
  DetailsLink,
  SpindlePillBtn
} from './Song.styles';

const Song = ({ id, title, artist, album, coverImg, coverBg, onAdd, isAdded }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <VinylSleeveCard>
      <CoverArt coverBg={coverBg}>
        {coverImg && !imgError ? (
          <AlbumCoverImg 
            src={coverImg} 
            alt={title} 
            onError={() => setImgError(true)} 
          />
        ) : (
          <VinylCenterSticker />
        )}
      </CoverArt>

      <VinylCardInfo>
        <SongTitleLink to={`/song/${id}`}>
          <SongTitle>{title}</SongTitle>
        </SongTitleLink>
        <SongArtist>{artist}</SongArtist>
        <SongMeta>{album}</SongMeta>

        <CardActions>
          <DetailsLink to={`/song/${id}`}>Ver detalles ➔</DetailsLink>
          {onAdd && (
            <SpindlePillBtn 
              onClick={onAdd}
              disabled={isAdded}
              isAdded={isAdded}
            >
              {isAdded ? 'En mi biblioteca ✓' : '+ Agregar'}
            </SpindlePillBtn>
          )}
        </CardActions>
      </VinylCardInfo>
    </VinylSleeveCard>
  );
};

export default Song;