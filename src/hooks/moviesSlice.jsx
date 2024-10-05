import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    clearNowPlaying: (state) => {
      state.nowPlaying = [];
    },
  },
});

export const { addNowPlaying, clearNowPlaying } = moviesSlice.actions;
export default moviesSlice.reducer;
