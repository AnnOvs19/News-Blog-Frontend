import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isAuth: false,
  userPosts: []
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    auth: (state, action) => {
      state.isAuth = action.payload;
    },

    setUser: (state, action) => {
      state.userData = action.payload;
    },

    setUserPosts: (state, action) =>{
      state.userPosts = action.payload;
    },
  }
});

export const { auth, setUser, setUserPosts } = userSlice.actions;

export const getAuth = (state) => state.userSlice.isAuth;

export const getUserData = (state) => state.userSlice.userData;

export const getUserPosts = (state) => state.userSlice.userPosts;

export default userSlice.reducer;
