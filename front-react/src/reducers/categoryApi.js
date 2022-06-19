import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "./APIconfig";
import axios from "axios";

const initialStateValue = {
    allCategories: [],
    selected: {cateID : 0}
};

export const fetchItemOptions = createAsyncThunk("category/GET_CATE", async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        return response.data.data;
    } catch (e) {
        return e.message;
    } 
});


const categorySlice = createSlice({
    name : "category",
    initialState: initialStateValue,
    reducers: {
        setLocation : (state, action) => {
            state.value = action.payload
        },
        selectCate : (state, action) => {
            state.selected = action.payload
        },
        selectSubCate : (state, action) => {
            state.value.selectedOptions = {...state.value.selectedOptions, ...action.payload}
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchItemOptions.fulfilled, (state, action) => {
            state.allCategories = action.payload;
        });
    },
})

export default categorySlice;

export const {setLocation, selectSubCate, selectCate} = categorySlice.actions;