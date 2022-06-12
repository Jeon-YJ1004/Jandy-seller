import { React, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import "./App.css";
import KakaoLogin from "./pages/kakao/KakaoLogin.js";
import Auth from "./pages/kakao/Auth.js";
import Profile from "./pages/kakao/Profile.js";
import {
  Mypage,
  ProductDetail,
  Main,
  Mymarket,
  ProductRegister,
} from "./pages";
import { history } from "./lib/history.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<KakaoLogin />} />
          <Route path="/oauth/kakao/login/" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/myMarket" element={<Mymarket />} />
          <Route path="/product/register" element={<ProductRegister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
