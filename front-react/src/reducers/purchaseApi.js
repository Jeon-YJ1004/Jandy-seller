import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {API_BASE_URL} from "./APIconfig";

const initialStateValue = {
    shoppingList : [],
    totalPrice: 0,
}

const purchaseSlice = createSlice({
    name : "purchase",
    initialState: initialStateValue,
    reducers: {
        setShoppingList : (state, action) => {
            state.shoppingList = action.payload
        },
        setTotalPrice : (state, action) => {
            state.totalPrice = action.payload
        }
    }
})

export default purchaseSlice;
export const {setShoppingList, setTotalPrice} = purchaseSlice.actions;