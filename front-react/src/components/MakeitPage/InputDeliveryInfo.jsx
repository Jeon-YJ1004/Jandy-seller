import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Box, TextField, Divider } from '@mui/material'

function InputDeliveryInfo() {
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
        
    }, [dispatch, userInfo])
    
  return (
    <div>
        <StyledH3>배송지</StyledH3>
            <Divider></Divider>
            <Box component="form" sx={{
              display:"grid",
              gap: 1,
              gridTemplateColumns:"repeat(5,1fr)",
              width: 500,
              m: 3}}>
              <Label sx={{gridRow: '1', gridColumn : '1'}}>주소</Label>
              <TextField type='name' sx={{gridRow: '1',gridColumn : '2/6'}}onChange={nameHandler}></TextField>
              <Label sx={{gridRow : '2', gridColumn : '1'}}>상세주소</Label>
              <TextField type='tel' sx={{gridRow : '2', gridColumn : '2/6'}} onChange={phoneHandler}></TextField>
              <Label sx={{gridRow : '3', gridColumn : '1'}}>배송메모</Label>
              <TextField type='email' sx={{gridRow : '3', gridColumn : '2/6'}} onChange={emailHandler}></TextField>
            </Box>
    </div>
  )
}

const Label = styled.label`
    font-size : 16px;
    font-weight : bold;
    line-height : 55px;
`

const StyledH3 = styled.h3`
    font-size: 22px;
`


export default InputDeliveryInfo