import React from 'react'
import styled from "styled-components";
import {Box} from '@mui/material'
import OptionSelecter from '../components/factoryPage/OptionSelecter';

function Factory() {
  return (
    <div>
        <Box>
            <Box sx={{m: '0 auto'}}>
                <OptionSelecter></OptionSelecter>
            </Box>
        </Box>
    </div>
  )
}

const StyledHead = styled.h2`

`;
export default Factory