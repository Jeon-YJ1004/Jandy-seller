import React, { useEffect } from 'react';
import axios from 'axios';
import qs from "qs";
import { useNavigate } from "react-router-dom";
import {
  REDIRECT_URI,
  REST_API_KEY,
} from "./kakao_config.js"

function Auth() {
    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();

    const getToken = async () => {
      const payload = qs.stringify({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
      });
    try {
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      window.Kakao.init(REST_API_KEY);
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      navigate("/profile", {replace: true});
      console.log(code);
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getToken();
  });
  
  return (
    <div>
        {code}
    </div>
  )
}

export default Auth