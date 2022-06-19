import React, {useState, useEffect} from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import {Box, Container} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import   { selectItemType } from '../../reducers/category';

function OptionSelector() {
  const dispatch = useDispatch();
  const Type = useSelector((state) => state.category.value.itemtype);
  console.log(Type);

   const itemtypes = [
       "의류",
       "스티커/지류",
       "키링",
       "핸드폰 액세서리",
       "포장용품"
   ]

   const ITEM_HEIGHT = itemtypes.length
   const [selected, setselected] = useState(0);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (event, index) => {
        setAnchorEl(null);
        setselected(index);
        dispatch(selectItemType(
          {Location: "Makeit", itemtype: itemtypes[index]}
        ))
    }
    

  return (
    <div>
    <Container sx={{height: '200px', backgroundColor: '#FFE664'}}>
    <FlexDiv>
    <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Box>
        <MenuIcon />
        </Box>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 50,
            width: '20ch',
          },
        }}
      >
        {itemtypes.map((option, index) => (
          <MenuItem key={option} value={option} 
          selected={option === itemtypes[0]} 
          onClick={(event) => handleMenuItemClick(event, index)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <StyledH>{itemtypes[selected]}</StyledH>
    </FlexDiv>
    </Container>
    </div>
  )
}

const FlexDiv = styled.div`
  display: flex;
  text-align : center;
  vertical-align: middle;
  position: relative;
  top: 40%;
`

const StyledH = styled.h1`
  margin: 0 auto;
`
export default OptionSelector