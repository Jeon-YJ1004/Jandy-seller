import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//!!!!!!aws 정보 입력해야함!!!
const API_BASE_URL = "";

const user = JSON.parse(localStorage.getItem("user"));

const login = createAsyncThunk(
  "user/login",
  async ({ userid, password }, thunkAPI) => {
    try {
      const response = await axios.post(API_BASE_URL + "/user/login", {
        userid,
        password,
      });
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const logout = createAsyncThunk("user/logout", async () => {
  localStorage.removeItem("user");
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default userSlice.reducer;
