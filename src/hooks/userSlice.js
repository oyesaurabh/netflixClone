import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      const newState = action.payload;
      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(newState));
      return newState;
    },
    removeUser: (state, action) => {
      // Remove from localStorage
      localStorage.removeItem("user");
      return null;
    },
    loadUser: (state, action) => {
      // Load from localStorage
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    },
  },
});

export const { addUser, removeUser, loadUser } = userSlice.actions;
export default userSlice.reducer;
