import React, {useState} from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function OptionSelecter() {
    //아직 select가 안됨 1순위 작업!!
   const options = [
       "의류",
       "스티커/지류",
       "키링",
       "핸드폰 액세서리",
       "포장용품"
   ]

   const ITEM_HEIGHT = options.length
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
    }

  return (
    <div>
    <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
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
        {options.map((option, index) => (
          <MenuItem key={option} value={option} 
          selected={option === options[0]} 
          onClick={(event) => handleMenuItemClick(event, index)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <h1>{options[selected]}</h1>
    </div>
  )
}

export default OptionSelecter