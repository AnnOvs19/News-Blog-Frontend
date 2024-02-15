import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

export const newsSlice = createSlice({
    name: "newsSlice",
    initialState,
    reducers: {
        loadPosts: (state, action) => {
            state.posts = action.payload;
        }
    }
});

export const { loadPosts } = newsSlice.actions;

export const getPosts = (state) => state.newsSlice.posts;

export default newsSlice.reducer;