import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import categoryReducer from "./reducers/category";
// import userSlice from "./reducers/userApi";
import productSlice from "./reducers//productApi";

export default configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    // user: userSlice.reducer,
    prd: productSlice.reducer,
  },
});
