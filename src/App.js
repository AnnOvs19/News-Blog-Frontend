import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";


function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Account />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
