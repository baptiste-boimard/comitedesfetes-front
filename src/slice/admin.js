import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/** Instance of AXIOS with options */
const instance = axios.create({
  baseURL:'http://localhost:3333',
});

const initialState = {
  isOpenAddAdmin: false,
  isOpenManageAdmin: false,
};

export const addAdmin = createAsyncThunk ('admin/addAdmin', async ({email, password}) => {
  const response = await instance.post('/signup', {
    email,
    password,
  });
  return response.data;
});


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
    closeAllAdminWindows: (state,_) => {
      state.isOpenAddAdmin = false;
      state.isOpenManageAdmin = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(addAdmin.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(addAdmin.fulfilled, (state, action) => {
        state.status = 'succeeded'
        console.log("SUCESS");
      })
      .addCase(addAdmin.rejected, (state, action) => {
        state.status = 'failed'
      })
  },
});

export const { toogleAddAdmin,
              toogleManageAdmin,
              closeAddAdmin,
              closeManageAdmin,
              closeAllAdminWindows,
              } = adminSlice.actions;

export default adminSlice.reducer;