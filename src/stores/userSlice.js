import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import server from '../utils/server';
import api from '../utils/api';

export const getUsers = createAsyncThunk('user/getUsers', async () => {
  const res = await server.get(api.user.list());
  return res.list;
});

export const getUser = createAsyncThunk('user/getUser', async (id) => {
  const res = await server.get(api.user.detail(id));
  return res.detail;
});

export const add = createAsyncThunk('user/addUser', async (values) => {
  return await server.post(api.user.add(), values);
});

export const edit = createAsyncThunk('user/editUser', async (values) => {
  return await server.patch(api.user.edit(), values);
});

export const remove = createAsyncThunk('user/removeUser', async (id) => {
  return await server.delete(api.user.delete(id));
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'idle',
    error: null,
    list: [],
    detail: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload; // if not modify status, we can `return action.payload` directly
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.detail = action.payload;
      })
  }
})

// Action creators are generated for each case reducer function
// export const { } = userSlice.actions

export default userSlice.reducer
