import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  'users/getUsersStatus',
  async (search) => {
    const response = await fetch(` https://api.github.com/search/repositories?q=${search}`);
    return  await response.json();
  });


export const userSlice = createSlice({
    name: 'users',
    initialState: {
     users:'',
    },

    extraReducers: {
      [getUsers.pending]: state => {
        state.loading = "loading"
      },
      [getUsers.fulfilled]: (state, action) => {
        state.users = action.payload;
        state.loading = "default"
      },
    }
  }
);
export default userSlice.reducer;