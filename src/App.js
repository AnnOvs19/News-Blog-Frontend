import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import EditAccount from "./pages/EditAccount/EditAccount";
import Article from "./pages/Article/Article";
import NewsPage from "./pages/NewsPage/NewsPage";


function App() {
  return <div className="App">
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
  </div>;
}

export default App;
