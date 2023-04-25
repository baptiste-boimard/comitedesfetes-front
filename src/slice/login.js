import { createSlice } from '@reduxjs/toolkit';

import { fetchUser } from './auth';

const initialState = {
  adminLogged: false,
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
      .addCase(fetchUser.rejected, (state,_) => {
        state.adminLogged = true;
      })
  },
});

export const { disconnectAdmin } = loginSlice.actions;

export default loginSlice.reducer;
