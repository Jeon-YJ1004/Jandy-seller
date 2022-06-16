import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Auth from "./pages/kakao/Auth.js";
import Profile from "./pages/kakao/Profile.js";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import MakeitHome from "./pages/Makeit/MakeitHome";
import MakeitCategory from "./pages/Makeit/MakeitCategory";
import Logout from "./pages/kakao/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />}/>
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/makeit" element={<MakeitHome />} />
          <Route path="/makeit/category" element={<MakeitCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
