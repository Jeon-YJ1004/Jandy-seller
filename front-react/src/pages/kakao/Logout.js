import React, {useEffect} from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [ , , removeCookie] = useCookies("token");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        removeCookie("token", { path : '/'});
        sessionStorage.removeItem("token");
        localStorage.removeItem("token");
    }
    

    useEffect(() => {
      logout();
      navigate('/', {replace : true})
    })
    
  return (
    <div>로그아웃 중</div>
  )
}

export default Logout