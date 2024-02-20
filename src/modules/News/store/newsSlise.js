import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    tags: []
}

export const newsSlice = createSlice({
    name: "newsSlice",
    initialState,
    reducers: {
        loadPosts: (state, action) => {
            state.posts = action.payload;
        },

        loadTags: (state, action) => {
            state.tags = action.payload;
        },
    }
});

export const { loadPosts, loadTags } = newsSlice.actions;

export const getPosts = (state) => state.newsSlice.posts;

export const getTags = (state) => state.newsSlice.tags;

export default newsSlice.reducer;