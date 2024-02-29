import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import EditAccount from "./pages/EditAccount/EditAccount";
import Article from "./pages/Article/Article";
import NewsPage from "./pages/NewsPage/NewsPage";

import { auth, setUser } from "./modules/Profile/store/userSlice";
import Loader from "./components/Loader/Loader";
import { checkToken } from "./modules/Profile/api/checkToken";

import "./App.scss";
import { loadTags } from "./modules/News/store/newsSlise";
import { fetchGetTypes } from "./modules/News/api/fetchGetTypes";

function App() {
  const dispatch = useDispatch();

  //Нужно для предотвращения ререндера хедера при перезагрузке
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Каждое обновление сайта проверяем токен юзера
    checkToken()
      .then((res) => {
        if (res) {
          //Пользователь авторизован!
          dispatch(auth(true));
          dispatch(setUser(res));
        }
      })
      .finally(() => setLoading(false));

    //Получение категорий в "создании поста" после обновлеия
    fetchGetTypes().then((res) => {
      dispatch(loadTags(res));
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Account />} />
          <Route path="/profile/user/:id" element={<Account />} />
          <Route path="/profile/edit" element={<EditAccount />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/post/:id" element={<NewsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
