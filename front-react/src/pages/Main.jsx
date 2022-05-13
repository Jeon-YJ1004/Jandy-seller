import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Banner from "../components/mainPage/Banner";
<<<<<<< HEAD
import Header from "../components/common/Header";
import SearchBox from "./../components/common/SearchBox";
import product_list from "../assets/json/product_list.js";
import Product from "../components/common/Product";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/user_actions";

function Main() {
  const dispatch = useDispatch();
  const prd_list = product_list;
=======
// import product_list from "../assets/json/product_list.js";
import { Header, SearchBox, Product } from "../components/common";
import { actionType as prdActions } from "../lib/productApi";

function Main() {
  //로컬json으로
  // const prd_list = product_list;

  const prd_list = useSelector((state) => state.prd.list);
  const dispatch = useDispatch();

>>>>>>> refs/remotes/origin/main
  useEffect(() => {
    // 상품 리스트를 db에서 받아오기
    dispatch(prdActions.getAllPrdDB());
  }, []);

  const {message} = useSelector(state => ({
    message : state.users.userToken
  }))

  const onClick = () => {
    dispatch(loginUser());
  }

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
        <Button onClick={onClick}>아하</Button>
        {message}
      </Container>
    </>
  );
}
const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

export default Main;
