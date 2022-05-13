import axios from "axios";
import { createAction, handleActions } from "redux-actions";

//redux action type
const SET_PRD = "SET_PRD";
const LOADING = "LOADING";
const CREATE_PRD = "INSERT_PRD";
const DELETE_PRD = "DELETE_PRD";

//redux action func
const setPrd = createAction(SET_PRD, (prd_list) => ({ prd_list }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
const createPrd = createAction(CREATE_PRD, (prd_list) => ({ prd_list }));
const deletePrd = createAction(DELETE_PRD, (prd_list) => ({ prd_list }));
//편집도 만들어야함

//!!!!!!aws 정보 입력해야함!!!
const API_BASE_URL = "";

const initialState = {
  list: [],
  is_loading: false,
};

//상품 리스트 get
const getAllPrdDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));

    axios({
      method: "get",
      url: API_BASE_URL + "/market",
    }).then((res) => {
      const prd_list = res.data.result;
      dispatch(setPrd(prd_list));
    });
  };
};

const getPrdDetailDB = (id) => {
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));
    axios({
      method: "get",
      url: API_BASE_URL + "/market/${id}",
    }).then((res) => {
      const post = res.data.result[0];
      console.log(post);
      dispatch(setPrd([post]));
    });
  };
};

const createPrdDB = (prdData) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: API_BASE_URL + "/market/create",
      body: JSON.stringify(prdData),
    });
  };
};

const deletePrdDB = (id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "delete",
      url: API_BASE_URL + "/market/${id}",
    }).then((res) => {});
  };
};
//리듀서 함수(각 액션에 대한 업데이트 함수)
export default handleActions(
  {
    [SET_PRD]: (state, action) => {},
    [LOADING]: (state, action) => {},
    [CREATE_PRD]: (state, action) => {},
    [DELETE_PRD]: (state, action) => {},
  },
  initialState
);

const actionType = {
  setPrd,
  getAllPrdDB,
  getPrdDetailDB,
  createPrdDB,
  deletePrdDB,
};
export { actionType };
