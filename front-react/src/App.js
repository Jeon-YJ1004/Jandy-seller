import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Auth from "./pages/kakao/Auth.js";
import Profile from "./pages/kakao/Profile.js";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import Makeit from "./pages/Makeit";
import Factory from "./pages/Factory";
import {store} from './index'

function App() {
  window.store = store;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/oauth/kakao/login/" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/makeit" element={<Makeit />} />
          <Route path="/factory" element={<Factory />} />
          <Route path="/myMarket" element={<Mymarket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
