import { configureStore } from "@reduxjs/toolkit";

import bookReducer from './bookSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    book: bookReducer,
    user: userReducer,
  }
});
