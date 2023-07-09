import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL:'http://localhost:3333',
});

export const saveArticle = createAsyncThunk ('tinymce/saveArticle', async ({title, summary, date, attach, userId},
  {rejectWithValue}) => {
  console.log(title, summary, date, attach, userId);
  return await instance.post('/tinymcesave', {
    title,
    summary,
    date,
    attach,
    userId,
  })
  .then((response) => {
    console.log('coucou');
  })
  .catch((error) => {
    return rejectWithValue(error);
  })
});

const initialState = {

};

const articleFormSlice = createSlice({
  name: "articleForm",
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
    .addCase(saveArticle.pending, (state, action) => {
      state.status = 'loading'
      console.log(state.status);
    })
    .addCase(saveArticle.fulfilled, (state, action) => {
      state.status = 'suceeded';
      console.log(state.status);
    })
    .addCase(saveArticle.rejected, (state, action) => {
      console.log(state.status);
      state.status = 'failed';
    })
  },
});

export default articleFormSlice.reducer;
