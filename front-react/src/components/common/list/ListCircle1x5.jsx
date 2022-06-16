import { Avatar, Box } from '@mui/material'
import { React, useState } from 'react'
import styled from "styled-components";

function ListCircle1x5({header, onClickHandler}) {
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
  ]);
  


  return (
    <div>
      <StyledH>{header}</StyledH>
        <Box display="grid" gridTemplateColumns="repeat(5,1fr)" gap={2}
            sx={{
              mt : 4,
              mb : 4,
            }}>
            {categories.map((category, index) => 
            <div key={index}>
            <Box gridRow={1} sx={{
              justifyContent: "center"
            }}>
              <Box onClick={() => onClickHandler(category)}>
                <Avatar sx={{m: '0 auto', width: '100px',
                height: '100px'}}></Avatar>
                <StyledP >{category.name}</StyledP>
              </Box>
            </Box>
            </div>
            )}
        </Box>
    </div>
  )
}

const StyledP = styled.p`
  font-size: 16px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledH = styled.p`
font-weight: bold;
font-size: 20px;
text-align: center;
overflow: hidden;
white-space: nowrap;
`;

export default ListCircle1x5