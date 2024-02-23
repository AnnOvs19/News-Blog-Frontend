import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  tags: [],
  tagPosts: [],
  searchPosts: []
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
      state.tagPosts = state.posts.filter(
        (item) => item.type_new.id === action.payload
      );
    },

    filterSearchPosts: (state, action) => {
      state.searchPosts = state.posts.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
    }
  }
});

export const { loadPosts, loadTags, filterTagPosts, filterSearchPosts } =
  newsSlice.actions;

export const getPosts = (state) => state.newsSlice.posts;

export const getTags = (state) => state.newsSlice.tags;

export const getTagPosts = (state) => state.newsSlice.tagPosts;

export const getSearchPosts = (state) => state.newsSlice.searchPosts;

export default newsSlice.reducer;
