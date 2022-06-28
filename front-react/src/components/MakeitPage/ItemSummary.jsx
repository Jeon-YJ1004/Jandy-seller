import React from 'react'
import {Box} from '@mui/material'
import ImgSlicker from '../common/ImgSlicker'
import styled from 'styled-components'
import btnSubmit from "../../assets/img/orderBtn.png"
import ItemOptionSelector from './ItemOptionSelector'
import {Link} from 'react-router-dom';
import { useCookies } from 'react-cookie'

function ItemSummary({itemInfo}) {
    const {id, company, name, productionThumbnailImage, category, options ,description, like} = itemInfo;
    const [cookies, setCookie] = useCookies(['user_token']);
    console.log('cookies',cookies);
  return (
    <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={6} sx={{
        maxWidth: 'lg',
        height: 600,
        m : '0 auto',
    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column', mr: 5}}>
            <ImgSlicker imgs={[productionThumbnailImage]}></ImgSlicker>
        </Box>
        <Box sx={{
            display: 'flex', 
            flexDirection: 'column', ml: 5}}>
            <ItemName>{name}</ItemName>
            <ItemDetails>
                <ItemDetailLabel>업체</ItemDetailLabel>
                <ItemDetailContent>{company}</ItemDetailContent>
            </ItemDetails>
            <Line></Line>
            <ItemDetails>
                <ItemDetailLabel>상품정보</ItemDetailLabel>
                <ItemDetailContent>{category}</ItemDetailContent>
            </ItemDetails>
            <Line></Line>
            <ItemDetails>
                <ItemDetailLabel>상품옵션</ItemDetailLabel>
            </ItemDetails>
            <ItemDetails>
                <ItemOptionSelector options={options}></ItemOptionSelector>
            </ItemDetails>
            <Box sx={{mt: 5,}}>
            <Link to='/order/'><img src={btnSubmit} alt="orderSubmit"></img></Link>
            </Box>
        </Box>
    </Box>
  )
}

const ItemName = styled.h2`
    text-align : left;
    font-size: 36px;
    line-height: 44px;
`
const Line = styled.hr`
  border: solid 0.2px #ebebeb;
  width: 92%;
`;

const ItemDetails = styled.div`
    display : block;
    position : relative;
    margin-bottom : 50px
`

const ItemDetailLabel = styled.ul`
    position : absolute;
    left : 10px;
    font-size: 16px;
    line-height: 20px;
    font-weight : bold;
    margin-botton: 30px;
`

const ItemDetailContent = styled.ul`
    position : absolute;
    left : 200px;
    font-size: 16px;
    line-height: 24px;
`


export default ItemSummary