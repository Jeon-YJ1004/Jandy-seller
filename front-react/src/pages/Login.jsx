import React from 'react'
import {Grid , Box } from '@mui/material'
import styled from "styled-components";
import KakaoLogin from "./kakao/KakaoLogin"

function Login() {
  return (
    <Grid container sx={{width : '100vw', height: '100vh'}}>
        <Grid item xs={0} md={4} sx={{bgcolor : '#FFE664'}}>
            
        </Grid>
        <Grid item xs={1} md={2}>

        </Grid>
        <Grid item xs={10} md={4} display='flex' sx={{alignItems: 'center'}}>
            <Box sx={{width: '100%', textAlign: 'center'}}>
                <StyledH2>로그인</StyledH2>
                <StyledP>M2M의 다양한 서비스를 이용하려면 로그인이 필요합니다!</StyledP>
                <KakaoLogin />
                <hr></hr>
                <StyledP>기존 계정으로 간편 가입이 가능합니다!</StyledP>
                <KakaoLogin />
            </Box>
        </Grid>
        <Grid item xs={1} md={2}>

        </Grid>
    </Grid>
  )
}

const StyledH2 = styled.h2`

`
const StyledP = styled.p`

`

const HomeBtn = styled.button`
`

export default Login