import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/libraryActions';
import Song from '../Song/Song';
import {
  LibrarySection,
  LibraryCardWrapper,
  LibraryHeader,
  CountBadge,
  EmptyState,
  EmptyVinylIcon,
  EmptyTitle,
  EmptySub,
  LibraryList
} from './Library.styles';

const Library = () => {
  const dispatch = useDispatch();
  // Lee la biblioteca desde el estado global de Redux
  const librarySongs = useSelector((state) => state);

  const handleRemove = (songId) => {
    dispatch(removeSong(songId));
  };

  return (
    <LibrarySection>
      <LibraryCardWrapper>
        <LibraryHeader>
          <h2>Mi Biblioteca 📚</h2>
          <CountBadge>{librarySongs.length} guardadas</CountBadge>
        </LibraryHeader>

        {librarySongs.length === 0 ? (
          <EmptyState>
            <EmptyVinylIcon>📀</EmptyVinylIcon>
            <EmptyTitle>Tu biblioteca está vacía</EmptyTitle>
            <EmptySub>Busca un artista y agrega álbumes a tu colección.</EmptySub>
          </EmptyState>
        ) : (
          <LibraryList>
            {librarySongs.map((song) => (
              <Song
                key={song.id}
                id={song.id}
                title={song.title}
                artist={song.artist}
                album={song.album}
                coverImg={song.coverImg}
                coverBg={song.coverBg}
                onRemove={() => handleRemove(song.id)}
                isLibraryView={true}
              />
            ))}
          </LibraryList>
        )}
      </LibraryCardWrapper>
    </LibrarySection>
  );
};

export default Library;