import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL:'http://localhost:3333',
});

const initialState = {
  summary:"",
};

const articleFormSlice = createSlice({
  name: "articleForm",
  initialState,
  reducers: {
  },
});

export const { saveTinymce } = articleFormSlice.actions;

export default articleFormSlice.reducer;
