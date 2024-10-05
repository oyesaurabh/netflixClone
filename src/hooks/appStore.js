import { configureStore } from "@reduxjs/toolkit";
import userReducer, { loadUser } from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
appStore.dispatch(loadUser());
export default appStore;
