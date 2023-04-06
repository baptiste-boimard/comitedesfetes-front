import { createSlice } from '@reduxjs/toolkit';


const loginSlice = createSlice({
  name: "login",
  initialState: {
    logged: false,
    isOpenSignup: false,
    isOpenLogin: false,
  },
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
  }
});

export const { toggleSignup, toggleLogin, closeSignup, closeLogin } = loginSlice.actions;

export default loginSlice;
