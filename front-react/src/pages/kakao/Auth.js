import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Auth() {
  const token = new URL(window.location.href).searchParams.get("token");
  const nickname = new URL(window.location.href).searchParams.get("nickname");
  const [cookies, setCookie] = useCookies(["token"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setToken = async () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);
    if (token) {
      //쿠키 저장
      setCookie("token", token, { path: "/", expires: expires });
      //세션 저장
      sessionStorage.setItem("token", token);
      //로컬 저장
      localStorage.setItem("token", token);
    }
  };

  const setNickname = () => {
    if (nickname !== null || nickname !== "") {
      //유저 닉네임 state저장
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    setToken();
    setNickname();
  });

  return <div>{token}</div>;
}
export default Auth;
