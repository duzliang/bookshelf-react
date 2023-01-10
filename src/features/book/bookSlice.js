import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import server from '../../utils/server';
import API from '../../utils/api';

export const getBooks = createAsyncThunk('book/getBooks', async () => {
  const res = await server.get(API.book.list());
  return res.list;
});

export const getBook = createAsyncThunk('book/getBook', async (id) => {
  const res = await server.get(API.book.detail(id));
  return res.detail;
});

export const add = createAsyncThunk('book/addBook', async (values) => {
  return await server.post(API.book.add(), values);
});

export const edit = createAsyncThunk('book/editBook', async (values) => {
  return await server.patch(API.book.edit(), values);
});

export const remove = createAsyncThunk('book/removeBook', async (id) => {
  return await server.delete(API.book.delete(id));
});

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    status: 'idle',
    error: null,
    list: [],
    detail: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload; // if not modify status, we can `return action.payload` directly
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.detail = action.payload;
      })
  }
})

// Action creators are generated for each case reducer function
// export const { } = bookSlice.actions

export default bookSlice.reducer
