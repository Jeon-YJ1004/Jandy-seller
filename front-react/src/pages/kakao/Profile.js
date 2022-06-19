import React, { useState, useEffect } from "react";
import KakaoLogout from "./KakaoLogout";

function Profile() {
  const [user_id, setuser_id] = useState();
  const [nickName, setnickName] = useState();

  const getProfile = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      setuser_id(data.id);
      setnickName(data.properties.nickname);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <KakaoLogout />
    </div>
  );
}

export default Profile;
