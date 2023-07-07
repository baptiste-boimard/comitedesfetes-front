import { createSlice } from '@reduxjs/toolkit';

import { fetchUser } from './auth';

const initialState = {
  adminLogged: false,
  msgLogin: '',
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    disconnectAdmin: (state,_) => {
      state.adminLogged = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state,_) => {
        state.adminLogged = true;
      })
      .addCase(fetchUser.rejected, (state,action) => {
        state.adminLogged = false;
        state.msgLogin = action.payload.message;
      })
  },
});

export const { disconnectAdmin } = loginSlice.actions;

export default loginSlice.reducer;
