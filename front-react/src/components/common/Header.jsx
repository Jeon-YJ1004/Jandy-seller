import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { userSlice } from "../../lib/userApi";

function Header() {
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  // const is_login = getCookie("is_login");
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
        {user_info ? (
          <StyledLi>
            <StyledLink to="/">{user_info.name}님</StyledLink>
          </StyledLi>
        ) : (
          <StyledLi>
            <StyledLink to="/login">로그인</StyledLink>
          </StyledLi>
        )}
        {user_info ? (
          <StyledLi>
            <StyledLink
              to="/"
              onClick={() => {
                dispatch(userSlice.logout());
              }}
            >
              로그아웃
            </StyledLink>
          </StyledLi>
        ) : (
          <StyledLi>
            <StyledLink to="/">회원가입</StyledLink>
          </StyledLi>
        )}
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
