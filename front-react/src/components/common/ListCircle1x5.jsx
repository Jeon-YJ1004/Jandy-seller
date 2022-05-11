import { Avatar, Box } from '@mui/material'
import {React, useState} from 'react'
import styled from "styled-components";

function ListCircle1x5(props) {
    // const listheader = props.header;
    // categories 가져오기

    const [categories, setcategory] = useState([
      {
        id: 1,
        name : "의류",
        img : "",
      }, {
        id: 2,
        name : "스티커/지류",
        img : "",
      },
      {
        id: 3,
        name : "키링",
        img : "",
      },
      {
        id: 4,
        name : "핸드폰 악세사리",
        img : "",
      },
      {
        id: 5,
        name : "포장용품",
        img : "",
      },
    ])
  return (
    <div>
      <StyledH>카테고리</StyledH>
        <Box display="grid" gridTemplateColumns="repeat(5,1fr)" gap={2}
            sx={{
    
            }}>
            {categories.map((category) => 
            <Box gridRow={1}  sx={{
              justifyContent: "center"
            }}>
              <Box>
                <Avatar sx={{m: '0 auto', width: '100px',
                height: '100px'}}></Avatar>
                <StyledP >{category.name}</StyledP>
              </Box>
            </Box>
            )}
        </Box>
    </div>
  )
}

const StyledP = styled.p`
  font-weight: bold;
  font-size: 22x;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledH = styled.h2`
font-family: Noto Sans KR
font-style: Regular
font-size: 28px
line-height: 36px
line-height: 89%
text-align : center
`;

export default ListCircle1x5