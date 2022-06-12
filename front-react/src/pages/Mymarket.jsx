import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import ProductRegister from "./ProductRegister";
import Header from "../components/common/Header";

function Mymarket() {
  /* 디비에 저장된 마켓 이름과 사진이 있다면 세팅.

  없으면 기본 이미지 세팅, 등록하기 버튼
  만약 유저가 세팅하면 디비에 post 
  */

  const [marketImg, setMarketImg] = useState();

  return (
    <>
      <Header />
      {/* 마켓 배너 */}
      {/* 판매자 닉네임 */}
      {/* 마켓 설명 */}
      {/* 마켓 카테고리 */}
      {/* 판매 상품 card */}
      <Link to="/product/register"> 상품 등록하기</Link>
    </>
  );
}

export default Mymarket;
