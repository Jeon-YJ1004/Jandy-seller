import React, {useEffect} from 'react'

import {Box, Container} from '@mui/material'
import OptionSelector from '../../components/makeitPage/OptionSelector'
import DetailOptionSelector from '../../components/makeitPage/DetailOptionSelector'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItemOptions } from '../../reducers/categoryApi'
import ListIndexPage from '../../components/common/list/ListIndexPage'

function MakeitCategory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemOptions());
  }, [])
  
  const items = useSelector(state => state.category.itemList)
  return (
    <div>
        <Box>
            <Box sx={{m: '0 auto', backgroundColor: '#FFE664'}}>
                <OptionSelector ></OptionSelector>
            </Box>
            <br></br>
            <DetailOptionSelector label="종류"></DetailOptionSelector>
            <br></br>
            <ListIndexPage items={items}></ListIndexPage>
        </Box>
    </div>
  )
}

export default MakeitCategory