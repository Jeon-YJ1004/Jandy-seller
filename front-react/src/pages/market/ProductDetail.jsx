import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "../../components/common/Header";
import BuyOrCart from "../../components/productDetailPage/BuyOrCart";
import ShowDetail from "../../components/productDetailPage/ShowDetail";
import ProductReview from "./../../components/productDetailPage/ProductReview";
import { getPrdDetailDB } from "../../reducers/productApi";

function ProductDetail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const prdList = useSelector((state) => state.prd.list);
  // const prd_id = prdList.findIndex((p) => p.id === id);
  const prd = prdList[id];

  useEffect(() => {
    //db에서 product 조회
    dispatch(getPrdDetailDB(id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <BuyOrCart productInfo={prd} />
      <ShowDetail productDesc={prd.description} />
      <ProductReview />
    </>
  );
}

export default ProductDetail;
