import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {Box, Divider, TextField} from '@mui/material';
import { useDispatch } from 'react-redux'
import { setRequesterInfo } from '../../reducers/purchaseApi';

function InputRequesterInfo() {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState(
        {
            name : "",
            phone : "",
            email : "",
        }
    );

    const nameHandler = (e) => {
        setUserInfo({...userInfo, name : e.currentTarget.value});
    }
    const phoneHandler = (e) => {
        setUserInfo({...userInfo, phone : e.currentTarget.value});
    }
    const emailHandler = (e) => {
        setUserInfo({...userInfo, email : e.currentTarget.value});
    }

    useEffect(() => {
        dispatch(setRequesterInfo(userInfo))
    }, [dispatch, userInfo])
    
  return (
    <div>
        <StyledH3>주문고객</StyledH3>
            <Divider></Divider>
            <Box component="form" sx={{
              display:"grid",
              gap: 1,
              gridTemplateColumns:"repeat(5,1fr)",
              width: 500,
              m: 3}}>
              <Label sx={{gridRow: '1', gridColumn : '1'}}>이름</Label>
              <TextField type='name' sx={{gridRow: '1',gridColumn : '2/6'}}onChange={nameHandler}></TextField>
              <Label sx={{gridRow : '2', gridColumn : '1'}}>연락처</Label>
              <TextField type='tel' sx={{gridRow : '2', gridColumn : '2/6'}} onChange={phoneHandler}></TextField>
              <Label sx={{gridRow : '3', gridColumn : '1'}}>이메일</Label>
              <TextField type='email' sx={{gridRow : '3', gridColumn : '2/6'}} onChange={emailHandler}></TextField>
            </Box>
    </div>
  )
}

export default InputRequesterInfo

const Label = styled.label`
    font-size : 16px;
    font-weight : bold;
    line-height : 55px;
`

const StyledH3 = styled.h3`
    font-size: 22px;
`