import { ADD_SONG, REMOVE_SONG } from './libraryReducer';

// Agrega una canción a la biblioteca
export const addSong = (song) => ({
  type: ADD_SONG,
  payload: song
});

// Elimina una canción según su ID
export const removeSong = (songId) => ({
  type: REMOVE_SONG,
  payload: songId
});