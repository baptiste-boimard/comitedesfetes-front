import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// import { useDispatch } from "react-redux";

// import { closeLogin } from "./login";

/** Instance of AXIOS with options */
const instance = axios.create({
  baseURL:'http://localhost:3333',
});

const initialState = {
  email: '',
  password: '',
};



export const fetchUser = createAsyncThunk ('auth/fetchUser', async ({email, password},
  {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
    return await instance.post('/login', {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return  rejectWithValue(error.response.data.error);

    })
});

// UNE AUTRE FACON DE FAIRE AVEC TRY CATCH
// export const fetchUser = createAsyncThunk ('auth/fetchUser', async ({email, password},
//   {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
//   try{
//     const response = await instance.post('/login', {
//       email,
//       password,
//     });
//     return response.data;
//   }
//   catch(error){
//     // console.log(error.response.data.error.message)
//     return rejectWithValue(error.response.data.error.message);
//   }
// });

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUserToState: (state, action) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
      console.log(state.email, state.password);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'suceeded';
        // => provoque les changements dans les slices suivants
        // dans leur extraReducers
        // loginSlice => adminLogged = true
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        // => provoque les changements dans les slices suivants
        // dans leur extraReducers
        // loginSlice => adminLogged = false
        // loginSlice => msgLogin = action.payload.message
      })
  },
})


export default authSlice.reducer;
