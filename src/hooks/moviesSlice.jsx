import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    popularMovies: [],
    topRated: [],
    upcoming: [],
    titleMovie: {},
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addTitleMovie: (state, action) => {
      state.titleMovie = action.payload;
    },
  },
});

export const {
  addNowPlaying,
  addPopularMovies,
  addTopRated,
  addUpcoming,
  addTitleMovie,
} = moviesSlice.actions;
export default moviesSlice.reducer;
