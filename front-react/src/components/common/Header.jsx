import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header(props) {
  const dispatch = useDispatch();
  const user_nickname = useSelector((state) => state.user.userNickname);
  const logined = useSelector((state) => state.user.Logined);
  const [cookies, setCookie] = useCookies(["token"]);
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
          <StyledLink to="/makeit">make it</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/myMarket">my Market</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/mypage">my Page</StyledLink>
        </StyledLi>
        {user_nickname ? (
          <StyledLi>
            <StyledLink to="/">{user_nickname}님</StyledLink>
          </StyledLi>
        ) : (
          <StyledLi>
            <StyledLink to="/login">로그인</StyledLink>
          </StyledLi>
        )}
        {logined ? (
          <StyledLi>
            <StyledLink to="/logout">로그아웃</StyledLink>
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
  font-size: 20px;
`;

export default Header;
