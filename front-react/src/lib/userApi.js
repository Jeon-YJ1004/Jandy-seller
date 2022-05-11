import axios from "axios";
import { createAction, handleAction, handleActions } from "redux-actions";

//redux action type
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";

//redux action func
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

//!!!!!!aws 정보 입력해야함!!!
const API_BASE_URL = "";

const initialState = {
  user: null,
  is_login: false,
};

// const getToken = () => {
//   const token =
//     Storage.local.get("__AUTH__") || Storage.session.get("__AUTH__");
//   return `Bearer ${token}`;
// };

const loginDB = (id, password) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: API_BASE_URL + "/user/login",
      data: {
        email: id,
        password: password,
      },
      // headers: {
      //   Authorization: getToken(),
      // },
    })
      .then((res) => {
        console.log(res);
        dispatch(
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          })
        );
        document.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logOut());
    history.replace("/");
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) => {
      state.user = action.payload.user;
      state.is_login = true;
    },
    [LOG_OUT]: (state, action) => {
      state.user = null;
      state.is_login = false;
      //세션 토큰 삭제
    },
    [GET_USER]: (state, action) => {},
  },
  initialState
);

//action creator export
const actionType = {
  logOut,
  getUser,
  loginDB,
  logoutDB,
};

export { actionType };
