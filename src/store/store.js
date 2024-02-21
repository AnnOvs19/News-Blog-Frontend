import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "../modules/News/store/newsSlise";
import userSlice from "../modules/Profile/store/userSlice";

export const store = configureStore({
  reducer: {
    newsSlice: newsSlice,
    userSlice: userSlice
  }
});
