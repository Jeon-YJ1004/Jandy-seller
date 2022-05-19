import { React, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import "./App.css";
import KakaoLogin from "./pages/kakao/KakaoLogin.js";
import Auth from "./pages/kakao/Auth.js";
import Profile from "./pages/kakao/Profile.js";
import { Mypage, ProductDetail, Main, Mymarket } from "./pages";
import { actionCreators as userActions } from "./lib/userApi";
import { history } from "./lib/storageConfig";

function App() {
  // componentDidMount() {
  //   const { AuthActions } = this.props;
  //   userActions.getUser();
  // }
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<KakaoLogin />} />
          <Route path="/oauth/kakao/login/" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/myMarket" element={<Mymarket />} />
        </Routes>
      </ConnectedRouter>
    </div>
  );
}

export default App;
