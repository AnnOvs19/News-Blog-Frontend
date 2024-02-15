import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "../modules/News/store/newsSlise";


export const store = configureStore({
    reducer: {
        newsSlice: newsSlice,
    }
})