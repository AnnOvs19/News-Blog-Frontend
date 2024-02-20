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
import { check, checkToken } from "./modules/Profile/api/checkToken";

import "./App.scss";

function App() {
  const dispatch = useDispatch();

  //Нужно для предотвращения ререндера хедера при перезагрузке
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      checkToken()
      .then((res) => {
        if (res) {
          //Пользователь авторизован!
          dispatch(auth(true));
          dispatch(setUser(res));
        }
      })
      .finally(() => setLoading(false));
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
          <Route path="/profile/edit" element={<EditAccount />} />
          <Route path="/article" element={<Article />} />
          <Route path="/post/:id" element={<NewsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
