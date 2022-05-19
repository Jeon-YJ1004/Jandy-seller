import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createLogger } from "redux-logger";
import userSlice from "./userApi";
import productSlice from "./productApi";

export const history = createBrowserHistory();

const rootReducer = (history) =>
  combineReducers({
    user: userSlice.reducer,
    prd: productSlice.reducer,
    router: connectRouter(history),
  });

//루트 리듀서와 미들웨어를 엮어 스토어 생성
// let store = (initialStore) =>
//   configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(routerMiddleware(history)),
//     devTools: process.env.NODE_ENV !== "production",
//   });

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
export default store;
