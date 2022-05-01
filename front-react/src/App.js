import './App.css';
import KakaoLogin from './component/view/user/kakao/KakaoLogin.js';
import Auth from './component/view/user/kakao/Auth.js';
import Profile from './component/view/user/kakao/Profile.js';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>하이</h1>
      <Routes>
        <Route exact path="/" element={<KakaoLogin />}></Route>
        <Route path="/oauth/kakao/login/" element={<Auth />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
