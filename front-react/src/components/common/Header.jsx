import { React, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  const isLogin = useState();
  return (
    <>
      <Logo
        onClick={() => {
          // window.history.go("/");
        }}
      >
        로고
      </Logo>
      <ul style={{ listStyle: "none" }}>
        <StyledLi>
          <StyledLink to="/">market</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/">make it</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/myMarket">my Market</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/mypage">my Page</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/login">로그인</StyledLink>
        </StyledLi>
      </ul>
    </>
  );
}

const Logo = styled.div`
  font-size: 20px;
`;
const StyledLi = styled.li`
  list-style: none;
  display: inline-block;
  margin: 10px 10px;
  height: 14px;
  font-size: 12px;
  line-height: 14px;
  position: relative;
  cursor: pointer;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export default Header;
