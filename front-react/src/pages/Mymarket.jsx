import { React, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../components/common/Header";
import { actionType as prdActions } from "../lib/productApi";

function Mymarket() {
  /* 디비에 저장된 마켓 이름과 사진이 있다면 세팅.
  없으면 기본 이미지 세팅
  만약 유저가 세팅하면 디비에 post 
      마켓 사진 div
      프로필 div
      카테고리 등 글씨만
      상품 등록하기 btn
  
  */

  const [marketImg, setMarketImg] = useState();

  return (
    <>
      <Header />
    </>
  );
}

export default Mymarket;
