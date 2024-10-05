import { configureStore } from "@reduxjs/toolkit";
import userReducer, { loadUser } from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});
appStore.dispatch(loadUser());
export default appStore;
