import { createAction, handleActions } from "redux-actions";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// //!!!!!!aws 정보 입력해야함!!!
const API_BASE_URL = "";

const initialState = {
  list: [],
  tatus: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// //상품 리스트 get
const getAllPrdDB = createAsyncThunk("product/SET_PRD", async () => {
  try {
    const response = await axios.get(API_BASE_URL + "/product");
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

const getPrdDetailDB = createAsyncThunk(
  "product/GET_DETAIL_PRD",
  async (id) => {
    try {
      const response = await axios.get(API_BASE_URL + `/product/${id}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const createPrdDB = createAsyncThunk("product/CREATE_PRD", async (prdData) => {
  try {
    const response = await axios.post(
      API_BASE_URL + `/product/create`,
      JSON.stringify(prdData)
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const updatePrdDB = createAsyncThunk(
  "product/UPDATE_PRD",
  async ({ id, prdData }) => {
    try {
      const response = await axios.put(
        API_BASE_URL + `/product/${id}`,
        JSON.stringify(prdData)
      );
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const deletePrdDB = createAsyncThunk("product/DELETE_PRD", async (id) => {
  try {
    const response = await axios.delete(API_BASE_URL + `/product/${id}`);
    return response.data.id;
  } catch (err) {
    return err.message;
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setPrd: (state, action) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPrdDB.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createPrdDB.fulfilled, (state, action) => {
        action.payload.id = Number(action.payload.id);
        state.list.push(action.payload);
      })
      .addCase(updatePrdDB.fulfilled, (state, action) => {
        return state.map((list) => {
          if (list.id === action.payload.id) {
            return { ...list, prdData: action.payload.prdData };
          } else {
            return list;
          }
        });
      })
      .addCase(deletePrdDB.fulfilled, (state, action) => {
        state.filter((list) => list.id !== action.payload.id);
      });
  },
});

// export const { setPrd, getAllPrdDB, getPrdDetailDB, createPrdDB, deletePrdDB } =
//   productSlice.actions;
