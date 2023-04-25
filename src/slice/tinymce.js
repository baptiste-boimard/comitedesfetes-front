import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL:'http://localhost:3333',
});

// const CLIENT_ID = '510042688421-1u8m29imkhtflquik2v6g9lf576kfn61.apps.googleusercontent.com';
// const CLIENT_SECRET = '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';
// const REDIRECT_URI = 'https://www.googleapis.com/auth/drive';
// const ACCESS_TOKEN = 'ya29.a0Ael9sCOGw_ABiTvZITEwOlXMTxWTYIsQ6VEKDbeF7lR0p1c885Rn9_NYaUI8UgCKhiXNZdvHnRrZh19DxDgkGNR2VdVzbYDrer3VJuNXJknn7JzrjCZWqb3K-e22gIRQ2VzYoWz3BOfpHiIQiW2mFMT0JqFAaCgYKASESARASFQF4udJhbZ0PEw4oM-GZ5_pevWq-xw0163';


// const oauth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI,
//   // API_KEY,
// );

// oauth2Client.setCredentials({refresh_token: ACCESS_TOKEN});

// const drive = google.drive({
//   version: 'v3',
//   auth: oauth2Client,
// });

const initialState = {
  saveTinymceContent:"",
  loadTinymceContent:"",
};


export const uploadToGdrive = createAsyncThunk ('tinymce/uploadToGdrive', async (content) => {
  const response = instance.post('tinymce', {
    content: content
  });
  console.log('AVANT BASCK', content);
  console.log('RETOUR FRONT',response);
  return response.data;
});

export const downloadFromGdrive = createAsyncThunk ('tinymce/downloadFromGdrive', async () => {
  const response = await instance.get('/tinymcedown');
  console.log('RETOUR BACK',response);
  return response.data
});



const tinymceSlice = createSlice({
  name: "tinymce",
  initialState,
  reducers: {
    saveTinymce: (state,action) => {
      console.log(action.payload);
      state.loadTinymceContent = action.payload;
      console.log(state.loadTinymceContent)
    },
  },
  extrareducers: (builder) => {
    builder
      .addCase(downloadFromGdrive.pending, (state, action) => {
        console.log('loading');
        state.status = 'loading'
        console.log(action);

      })
      .addCase(downloadFromGdrive.fulfilled, (state, action) => {
        state.status = 'suceeded';
        console.log('suceeded');
        console.log(action);
        // state.saveTinymce = action.payload;
      })
      .addCase(downloadFromGdrive.rejected, (state, action) => {
        state.status = 'failed';
        console.log('failed');
        console.log(action);

        // => provoque les changements dans les slices suivants
        // dans leur extraReducers
        // loginSlice => adminLogged = true
      })
  },
});

export const { saveTinymce } = tinymceSlice.actions;

export default tinymceSlice.reducer;
