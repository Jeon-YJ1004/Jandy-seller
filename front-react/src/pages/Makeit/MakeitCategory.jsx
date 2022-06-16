import React from 'react'
import styled from "styled-components"
import {Box} from '@mui/material'
import OptionSelector from '../../components/MakeitPage/OptionSelector'
import DetailOptionSelector from '../../components/MakeitPage/DetailOptionSelector'

function MakeitCategory() {
  return (
    <div>
        <Box>
            <Box sx={{m: '0 auto', backgroundColor: '#FFE664'}}>
                <OptionSelector></OptionSelector>
            </Box>
            <br></br>
            <DetailOptionSelector label="종류"></DetailOptionSelector>
            <br></br>
            <DetailOptionSelector label="옵션"></DetailOptionSelector>
        </Box>
    </div>
  )
}

export default MakeitCategory