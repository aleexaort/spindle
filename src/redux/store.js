import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from './slices/librarySlice';
import searchReducer from './slices/searchSlice';

// Store con Redux Toolkit
export const store = configureStore({
  reducer: {
    library: libraryReducer,
    search: searchReducer
  }
});