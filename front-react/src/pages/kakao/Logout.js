import React, {useEffect} from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../reducers/user';

const Logout = () => {
    const [ , , removeCookie] = useCookies("user_token");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        removeCookie("user_token", { path : '/'});
        sessionStorage.removeItem("user_token");
        localStorage.removeItem("user_token");
        dispatch(logout());
    }
    

    useEffect(() => {
      logoutHandler();
      navigate('/', {replace : true})
    })
    
  return (
    <div>로그아웃 중</div>
  )
}

export default Logout