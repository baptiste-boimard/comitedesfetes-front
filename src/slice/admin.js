import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenAddAdmin: false,
  isOpenManageAdmin: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    toogleAddAdmin: (state,_) => {
      state.isOpenAddAdmin = !state.isOpenAddAdmin;
    },
    toogleManageAdmin: (state,_) => {
      state.isOpenManageAdmin = !state.isOpenManageAdmin;
    },
    closeAddAdmin: (state,_) => {
      state.isOpenAddAdmin = false;
    },
    closeManageAdmin: (state,_) => {
      state.isOpenManageAdmin = false;
    },
  },
});

export const { toogleAddAdmin, toogleManageAdmin, closeAddAdmin, closeManageAdmin } = adminSlice.actions;

export default adminSlice.reducer;
