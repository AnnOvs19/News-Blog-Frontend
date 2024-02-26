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
    //Подгрузка массива всех постов без соритровки и фильтрации
    loadPosts: (state, action) => {
      state.posts = action.payload;
    },

    //Подгрузка всех постов по выбранному тегу
    loadTagPosts: (state, action) => {
      state.tagPosts = action.payload;
    },

    //Подгрузка всех постов по свободному поиску
    loadSearchPosts: (state, action) => {
      state.searchPosts = action.payload;
    },

    //Подгрузка тэгов в дропдауне
    loadTags: (state, action) => {
      state.tags = action.payload;
    },

    //Фильтрация массива всех постов по тегам
    filterTagPosts: (state, action) => {
      state.tagPosts = state.posts.filter(
        (item) => item.type_new.id === action.payload
      );
    },

    //Фильтрация массива всех постов по поиску
    filterSearchPosts: (state, action) => {
      state.searchPosts = state.posts.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
    },

    //Отчистка массива с постами по поиску
    clearFiltersSearch: (state, action) => {
      state.searchPosts = [];
    },

    //Отчистка массива с постами по тегам
    clearFiltersTag: (state, action) => {
      state.tagPosts = [];
    }
  }
});

export const {
  loadPosts,
  loadTagPosts,
  loadSearchPosts,
  loadTags,
  filterTagPosts,
  filterSearchPosts,
  clearFiltersSearch,
  clearFiltersTag
} = newsSlice.actions;

export const getPosts = (state) => state.newsSlice.posts;

export const getTags = (state) => state.newsSlice.tags;

export const getTagPosts = (state) => state.newsSlice.tagPosts;

export const getSearchPosts = (state) => state.newsSlice.searchPosts;

export default newsSlice.reducer;
