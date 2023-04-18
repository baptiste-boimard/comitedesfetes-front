import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

const utilitiesSlice = createSlice({
  name: "utilities",
  initialState,
  reducers: {
    handleFieldChange: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    },
  },
});

export const { handleFieldChange } = utilitiesSlice.actions;

export default utilitiesSlice.reducer;
