// Nombres de las acciones
export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

// Estado inicial
const initialState = [];

export const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      // Verifica para evitar duplicados
      const exists = state.some((song) => song.id === action.payload.id);
      if (exists) {
        return state;
      }
      // Retorna un nuevo arreglo
      return [...state, action.payload];

    case REMOVE_SONG:
      // Filtro para quitar la canción
      return state.filter((song) => song.id !== action.payload);

    default:
      // Si la acción no coincide, estado sin cambios
      return state;
  }
};