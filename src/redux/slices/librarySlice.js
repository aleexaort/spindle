import { createSlice } from '@reduxjs/toolkit';

const librarySlice = createSlice({
  name: 'library',
  initialState: [],
  reducers: {
    // Agrega una canción evitando duplicados
    addSong: (state, action) => {
      const exists = state.some((song) => song.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    // Elimina una canción según su ID
    removeSong: (state, action) => {
      return state.filter((song) => song.id !== action.payload);
    }
  }
});

// Exportación de acciones y reducer
export const { addSong, removeSong } = librarySlice.actions;
export default librarySlice.reducer;