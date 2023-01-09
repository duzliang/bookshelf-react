import { configureStore } from "@reduxjs/toolkit";

import bookReducer from '../features/book/bookSlice';

export default configureStore({
  reducer: {
    book: bookReducer,
  }
});
