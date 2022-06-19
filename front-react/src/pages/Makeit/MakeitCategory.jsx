import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import {Box} from '@mui/material'
import OptionSelector from '../../components/makeitPage/OptionSelector'
import DetailOptionSelector from '../../components/makeitPage/DetailOptionSelector'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItemOptions } from '../../reducers/categoryApi'
import { useLocation } from 'react-router-dom'

function MakeitCategory() {
  const {selected} = useLocation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.allCategories);

  useEffect(() => {
    dispatch(fetchItemOptions());
  }, [])
  
  console.log('cate',categories);
  
  return (
    <div>
        <Box>
            <Box sx={{m: '0 auto', backgroundColor: '#FFE664'}}>
                <OptionSelector ></OptionSelector>
            </Box>
            <br></br>
            <DetailOptionSelector label="종류"></DetailOptionSelector>
        </Box>
    </div>
  )
}

export default MakeitCategory