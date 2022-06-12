import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { userSlice } from "./lib/userApi";
import store from "./lib/storageConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));

function loadUser() {
  try {
    // user key 값으로 value 가져옴.
    const user = localStorage.getItem("user");
    if (!user) return;
    store.dispatch(userSlice.setUser(JSON.parse(user)));
  } catch (e) {
    console.log("localStorage is not working");
  }
}
loadUser();
root.render(
  <Provider store={store()}>
    <App />
  </Provider>
);

reportWebVitals();
