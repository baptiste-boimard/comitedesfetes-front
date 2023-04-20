import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  saveTinymceContent:"",
};

const tinymceSlice = createSlice({
  name: "tinymce",
  initialState,
  reducers: {
    saveTinymce: (state,action) => {
      console.log(action.payload);
      state.saveTinymceContent = action.payload;
      console.log(state.saveTinymceContent)
    },
  },
});

export const { saveTinymce } = tinymceSlice.actions;

export default tinymceSlice.reducer;
