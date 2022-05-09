import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
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
        {/* 
        <StyledLi>
          <StyledLink>make it</StyledLink>
        </StyledLi> */}
        {/* <StyledLi>
          <StyledA onClick={()=>{window.history.go("/cart")}}>my market</StyledA>
        </StyledLi> */}
        {/* <StyledLi>
          <StyledLink >mypgage</StyledLink>
        </StyledLi> */}
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
  liststyle: none;
  display: inline-block;
  margin: 10px auto;
  height: 14px;
  fontsize: 12px;
  lineheight: 14px;
  position: relative;
  cursor: pointer;
`;
const StyledLink = styled(Link)`
  textdecoration: none;
  cursor: pointer;
`;

export default Header;
