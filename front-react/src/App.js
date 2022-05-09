import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import KakaoLogin from "./pages/kakao/KakaoLogin.js";
import Auth from "./pages/kakao/Auth.js";
import Profile from "./pages/kakao/Profile.js";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<KakaoLogin />}></Route>
          <Route path="/oauth/kakao/login/" element={<Auth />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
