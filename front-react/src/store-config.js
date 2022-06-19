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
