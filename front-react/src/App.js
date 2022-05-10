import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import KakaoLogin from "./pages/kakao/KakaoLogin.js";
import Auth from "./pages/kakao/Auth.js";
import Profile from "./pages/kakao/Profile.js";
import { Mypage, ProductDetail, Main, Mymarket } from "./pages";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<KakaoLogin />} />
          <Route path="/oauth/kakao/login/" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/myMarket" element={<Mymarket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
