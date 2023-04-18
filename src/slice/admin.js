import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenAddAdmin: false,
  isOpenManageAdmin: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    openAddAdmin: (state,_) => {
      state.isOpenAddAdmin = !state.isOpenAddAdmin;
    },
    isOpenManageAdmin: (state,_) => {
      state.isOpenManageAdmin = !state.isOpenManageAdmin;
    },
    closeAddAdmin: (state,_) => {
      state.isOpenAddAdmin = false;
    },
  },
});

export const { openAddAdmin, openManageAdmin, closeAddAdmin } = adminSlice.actions;

export default adminSlice.reducer;
