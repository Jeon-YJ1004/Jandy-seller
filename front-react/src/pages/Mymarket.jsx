import { React, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import ProductRegister from "./ProductRegister";
import Header from "../components/common/Header";
import { userSlice } from "./../lib/userApi";
import { useSelector, useDispatch } from "react-redux";
import { History } from "history";
import EditIcon from "@mui/icons-material/Edit";
function Mymarket() {
  /* 디비에 저장된 마켓 이름과 사진이 있다면 세팅.

  없으면 기본 이미지 세팅, 등록하기 버튼
  만약 유저가 세팅하면 디비에 post 
  */
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  const [market, setMarket] = useState([]);
  const [marketName, setMarketName] = useState("");

  useEffect(() => {});
  const changeMarketName = (e) => {
    setMarketName(e.target.value);
    console.log(marketName);
  };

  return (
    <>
      <Header />
      <MarketBanner>
        <input
          type="text"
          className="marketBanner"
          defaultValue={marketName}
          onChange={changeMarketName}
        />
        <MarketName
          onClick={changeMarketName}
          placeholder={marketName}
        ></MarketName>
        <EditIcon />
        {/* 판매자 닉네임 */}

        {console.log(user_info)}
        {/* 마켓 설명 */}
      </MarketBanner>

      {/* 마켓 카테고리 */}
      {/* 판매 상품 card */}
      <Link to="/product/register"> 상품 등록하기</Link>
    </>
  );
}
const MarketBanner = styled.div``;
const MarketName = styled.button``;

export default Mymarket;
