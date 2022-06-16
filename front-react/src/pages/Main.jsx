import { React, useEffect } from "react";

import styled from "styled-components";

import Banner from "../components/mainPage/Banner";
import Header from "../components/common/Header";
import SearchBox from "./../components/common/SearchBox";
import product_list from "../assets/json/product_list.js";
import Product from "../components/common/Product";

function Main() {
  const prd_list = product_list;
  useEffect(() => {
    // 쿠키에 로그인 세션이 있는지 확인
    // 상품 리스트를 db에서 받아오기
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
        
      </Container>
    </>
  );
}
const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

export default Main;
