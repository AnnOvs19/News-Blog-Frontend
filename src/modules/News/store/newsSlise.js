import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  tagPosts: [],
  tags: []
};

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

    filterTagPosts: (state, action) => {
      state.categoryPosts = state.posts.filter(
        (item) => item.type_new.id === action.payload
      );
    }
  }
});

export const { loadPosts, loadTags, filterTagPosts } = newsSlice.actions;

export const getPosts = (state) => state.newsSlice.posts;

export const getTags = (state) => state.newsSlice.tags;

export const getTagPosts = (state) => state.newsSlice.tagPosts;

export default newsSlice.reducer;
