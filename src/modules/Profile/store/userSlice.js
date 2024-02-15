import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userData: {
    id: "",
    name: "",
    email: ""
  },
  isAuth: false
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
        state.token = action.payload;
    },

    auth: (state, action) => {
        state.isAuth = action.payload
    },

    setUser: (state, action) => {
        state.userData = action.payload
    },
  }
});


export const {setToken, auth, setUser} = userSlice.actions;

export const getToken = (state) => state.userSlice.token;

export const getAuth = (state) => state.userSlice.isAuth;

export const getUserData = (state) => state.userSlice.userData;
