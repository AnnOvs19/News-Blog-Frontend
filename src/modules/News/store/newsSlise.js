import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

export const newsSlise = createSlice({
    name: "newsSlise",
    initialState,
    reducers: {
        loadPosts: (state, action) => {
            state.posts = action.payload;
        }
    }
})

export const { loadPosts } = newsSlise.actions;

export const getPosts = (state) => state.newsSlise.posts;

export default newsSlise.reducer;