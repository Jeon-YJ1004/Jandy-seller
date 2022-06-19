import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store-config";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import { userSlice } from "./reducers/userApi";

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
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>
);

reportWebVitals();
