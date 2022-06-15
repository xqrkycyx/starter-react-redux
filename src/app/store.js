import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../features/notes/notes.slice';
import searchReducer from '../features/search/search.slice';

export default configureStore({
  reducer: {
    notes: notesReducer,
    search: searchReducer,
  },
});
