import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    titleMovie: {},
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTitleMovie: (state, action) => {
      state.titleMovie = action.payload;
    },
  },
});

export const { addNowPlaying, addTitleMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
