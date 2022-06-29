import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100vw', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} variant="fullWidth" sx={{bgcolor : "#FFE664"}} textColor="inherit">
        <Tab label="상세정보">

        </Tab>
        <Tab label="문의하기">

        </Tab>
        <Tab label="리뷰">

        </Tab>
      </Tabs>
    </Box>
  );
}
