import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isAuth: false
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
    }
  }
});

export const { auth, setUser } = userSlice.actions;

export const getAuth = (state) => state.userSlice.isAuth;

export const getUserData = (state) => state.userSlice.userData;

export default userSlice.reducer;
