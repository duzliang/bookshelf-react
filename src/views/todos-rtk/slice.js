import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchTodos } from "./api";

const initialState = {
  todos: [],
  count: 0,
  status: 'idle',
};

export const getList = createAsyncThunk(
  'todos/list',
  async () => {
    const res = await fetchTodos();
    return res.data;
  }
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addOne: (state) => {
      state.count += 1;
    },
    multiThree: (state) => {
      state.count *= 3;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.status = 'idle';
        state.todos = action.payload;
      })
  }
});

export const { addOne, multiThree } = todosSlice.actions;

export default todosSlice.reducer;
