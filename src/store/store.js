import { configureStore } from "@reduxjs/toolkit";
import newsSlise from "../modules/News/store/newsSlise";


export const store = configureStore({
    reducer: {
        newsSlise: newsSlise,
    }
})