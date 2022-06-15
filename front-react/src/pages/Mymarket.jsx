import { React, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import swal from "sweetalert";

import ProductRegister from "./ProductRegister";
import Header from "../components/common/Header";
import { userSlice } from "./../lib/userApi";
import { useSelector, useDispatch } from "react-redux";
import { History } from "history";
import Product from "../components/common/Product";
import EditIcon from "@mui/icons-material/Edit";
function Mymarket() {
  /* 디비에 저장된 마켓 이름과 사진이 있다면 세팅.

  없으면 기본 이미지 세팅, 등록하기 버튼
  만약 유저가 세팅하면 디비에 post 
  */
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  const [market, setMarket] = useState({
    name: null,
    // maker: user_info.name,
    star: 0,
    product: [],
  });
  const [marketName, setMarketName] = useState("마켓이름");
  const categorys = ["전체", "스티커", "키링", "핸드폰"];
  const [category, setCategory] = useState("전체");

  useEffect(() => {});

  const changeMarketName = (e) => {
    const eTarget = e.target.value;
    setMarketName(eTarget);
    console.log(marketName);
  };
  const saveMarketName = (e) => {
    e.preventDefault();
    swal({
      title: "마켓 설정 완료",
      icon: "success",
      buttons: {
        save: { text: "저장하기", value: "save" },
        cancel: "취소하기",
      },
    }).then((value) => {
      if (value === "save") {
        // 마켓 이름 변경 axios 생성해야함
        // 저장 안하면 원래 값으로
      }
    });
  };
  const changeCategory = (e) => {
    const eTarget = e.target.value;
    setCategory(eTarget);

    // console.log(category);
  };

  return (
    <>
      <Header />
      <MarketBanner>
        <MarketName
          type="text"
          className="marketBanner"
          defaultValue={marketName}
          onChange={changeMarketName}
          placeholder={marketName}
        />

        <EditIcon onClick={saveMarketName} />

        {/* 판매자 닉네임 */}

        {console.log(user_info)}
        {/* 마켓 설명 */}
      </MarketBanner>

      {/* 마켓 카테고리 */}
      <CategoryNav>
        {categorys.map((c) => (
          <CategoryTab value={c} onClick={changeCategory}>
            {c}
          </CategoryTab>
        ))}
      </CategoryNav>

      {/* 판매 상품 card */}
      {market.products ? (
        <Product category={category} />
      ) : (
        <Link to="/product/register"> 상품 등록하기</Link>
      )}
    </>
  );
}
const MarketBanner = styled.div``;
const MarketName = styled.input``;
const CategoryNav = styled.nav``;
const CategoryTab = styled.div`
  margin: 10px;
  cursor: pointer;
`;
export default Mymarket;
