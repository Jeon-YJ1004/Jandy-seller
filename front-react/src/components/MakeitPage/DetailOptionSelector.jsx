import { Box, Container } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectItemOption } from '../../reducers/category'
import styled from 'styled-components'

function DetailOptionSelector({label}) {
    const dispatch = useDispatch();
    const itemoptions = useSelector(state => state.category.value.itemoptions);
    const selectedOptions = useSelector(state => state.category.value.selectedOptions);
    const options = itemoptions[label];
    const optionClickHandler = (option) => {
        let payload = {};
        payload[label] = option;
        dispatch(selectItemOption(payload))
    }
    console.log(selectedOptions[label]);

  return (
    <div>
        <Container sx={{border : 'solid 1.5px black', height: '100px', p: 4, mt : 4}}>
            <Box display="grid" gridTemplateColumns="repeat(6,1fr)" gap={2}>
                <Label>{label}</Label>
                {options && options.map((option, index) => 
                <div key={index}>
                  <Box sx={{
                    justifyContent: "center"
                    }}>
                    <Option onClick={() => optionClickHandler(option)} id={option == selectedOptions[label] ? 'isSelected' : 'none'}>
                        {option}
                    </Option>
                    </Box>  
                </div>
                )}
            </Box>
        </Container>
    </div>
  )
}

// 선택된 option 당 css 추가가 안됨. 
const Option = styled.div`
    text-align : center;
    align-items : center;
    font-weight : bold;
    &: hover {
        background-color: orange;
    }
`

const Label = styled.div`
    text-align : center;
    align-items : center;
    border-right : solid 2px black;
`

export default DetailOptionSelector