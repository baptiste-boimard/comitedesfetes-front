import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// import { useDispatch } from "react-redux";

// import { closeLogin } from "./login";

/** Instance of AXIOS with options */
const instance = axios.create({
  baseURL:'https://git.heroku.com/comitedesfetes.git',
});

const initialState = {
  email: '',
  password: '',
};

export const fetchUser = createAsyncThunk ('auth/fetchUser', async ({email, password}) => {
  const response = await instance.post('/login', {
    email,
    password,
  });
  return response.data;
});


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
        console.log('suceeded');
        console.log(action);

      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        // => provoque les changements dans les slices suivants
        // dans leur extraReducers
        // loginSlice => adminLogged = true
      })
  },
})


export default authSlice.reducer;
