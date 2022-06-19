<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/user"
import categoryReducer from "./reducers/category"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

//적용에 무리 공식문서 뒤지는 중
const persistConfig = {
    key: "root",
    storage : storage,
}


export default configureStore({
    reducer: {
        user: userReducer,
        category: categoryReducer,
    },
    
})
=======
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
>>>>>>> 9b961bce4661aac9f57352c546f550d7a36888e4
