import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  'users/getUsersStatus',
  async (search) => {
    const response = await fetch(` https://api.github.com/search/repositories?q=${search}`);
    return await response.json();
  });

export const userSlice = createSlice({
    name: 'users',
    initialState: {
      users: '',
      loading: '',
      repeat: '',
      java: false,
      js: false,
      html: false,
      php: false,
      page: '',
      user: '',
    },
    reducers: {
      targetRepeat: (state, action) => {
        state.repeat = action.payload
      },
      targetJS: (state, action) => {
        state.js = action.payload
      },
      targetPHP: (state, action) => {
        state.php = action.payload
      },
      targetHTML: (state, action) => {
        state.html = action.payload
      },
      targetJava: (state, action) => {
        state.java = action.payload
      },
      targetPage: (state, action) => {
        state.page = action.payload
      },
      targetUser: (state, action) => {
        state.user = action.payload
      },
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
export const {targetUser, targetRepeat, targetPHP, targetJS, targetHTML, targetJava, targetPage} = userSlice.actions
export default userSlice.reducer;