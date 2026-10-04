import { createStore } from 'redux';
import { libraryReducer } from './libraryReducer';

// Almacén global usando reducer
export const store = createStore(libraryReducer);