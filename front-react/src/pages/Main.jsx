import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Banner from "../components/mainPage/Banner";
// import product_list from "../assets/json/product_list.js";
import { Header, SearchBox, Product } from "../components/common";
import productSlice from "../lib/productApi";
import { getAllPrdDB } from "../lib/productApi";

function Main() {
  // 쿠키에 로그인 세션이 있는지 확인
  // if(isLogin(true){
  //   dispatch(useActions.checkLoginDB());
  // })
  const prd_list = useSelector((state) => state.prd.list);
  const dispatch = useDispatch();

  useEffect(() => {
    // 상품 리스트를 db에서 받아오기
    dispatch(getAllPrdDB());
    console.log(prd_list);
  }, []);
  return (
    <>
      <Container>
        <Header />
        <Banner />
        인기 해쉬테그
        <SearchBox />
        주제
        {prd_list.map((product) => {
          return <Product key={product.id} id={product.id} {...product} />;
        })}
        \
      </Container>
    </>
  );
}
const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

export default Main;
