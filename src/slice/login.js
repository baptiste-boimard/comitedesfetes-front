import { createSlice } from '@reduxjs/toolkit';

import { fetchUser } from './auth';

const initialState = {
  logged: false,
  isOpenSignup: false,
  isOpenLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleSignup: (state,_) => {
      state.isOpenSignup = !state.isOpenSignup;
    },
    toggleLogin: (state,_) =>  {
      state.isOpenLogin = !state.isOpenLogin;
    },
    closeSignup: (state,_) => {
      state.isOpenSignup = false;
    },
    closeLogin: (state,_) => {
      state.isOpenLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isOpenLogin = false;
      })
  }  ,
});

export const { toggleSignup, toggleLogin, closeSignup, closeLogin } = loginSlice.actions;

export default loginSlice.reducer;
