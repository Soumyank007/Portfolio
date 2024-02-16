import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? true : false
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;