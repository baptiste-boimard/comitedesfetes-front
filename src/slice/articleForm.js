import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL:'https://git.heroku.com/comitedesfetes.git',
});

const initialState = {
  title:"",
  summary:"",
  date:"",
  poster:"",
  author:"",
};

const articleFormSlice = createSlice({
  name: "articleForm",
  initialState,
  reducers: {
  },
});

export const { saveTinymce } = articleFormSlice.actions;

export default articleFormSlice.reducer;
