import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isAuth: false,
  userPosts: []
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    //Запись состояния - авторизован пользователь или нет
    auth: (state, action) => {
      state.isAuth = action.payload;
    },

    //Запись данных о юзере из jwt токена (имя, аватар, статус, емейл)
    setUser: (state, action) => {
      state.userData = action.payload;
    },

    //Запись постов юзера
    setUserPosts: (state, action) => {
      state.userPosts = action.payload;
    },

    //Удаление одного поста юзера
    deletePostUser: (state, action) => {
      //Записываем в массив постов юзеры все посты, кроме удаляемого
      state.userPosts = state.userPosts.filter(
        (item) => item.id != action.payload
      );
    }
  }
});

export const { auth, setUser, setUserPosts, deletePostUser } =
  userSlice.actions;

//Получение статуса авторизации
export const getAuth = (state) => state.userSlice.isAuth;

//Получение информации о юзере
export const getUserData = (state) => state.userSlice.userData;

//Получение постов юзера
export const getUserPosts = (state) => state.userSlice.userPosts;

export default userSlice.reducer;
