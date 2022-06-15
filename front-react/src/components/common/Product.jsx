import { React } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import PropTypes from "prop-types";

function Product(props) {
  const detailURL = `/product/detail/${props.id}`;
  return (
    <>
      <StyledLink to={detailURL}>
        <img src={props.image} alt="상품이미지"></img>
        <StyledP>{props.store}</StyledP>

        <StyledP>{props.item}</StyledP>

        {/* <Price>{props.price}</Price> */}
        <Unit>원</Unit>
      </StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  overflow: hidden;
  textoverflow: ellipsis;
  whitespace: nowrap;
  width: 272px;
`;
const StyledP = styled.p`
  font-weight: bold;
  font-size: 13px;
  margin: 15px 0 0 0;
  height: 15px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  width: 150px;
`;
const Price = styled.span`
  margin: 14px 0px 0px;
  size: 13px;
`;
const Unit = styled.span`
  font-size: 0.7em;
  color: gray;
`;
export default Product;
