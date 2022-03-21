import React from 'react';
import {
  Box, Button, Stack, Typography,
} from '@mui/material';

const bottomBarBox = {
  // display : "flex"
};

const bottomBarButton = { my: 2, color: 'white', display: 'block' };

function BottomBar() {
  return (
    <Box bgcolor="primary.main" sx={bottomBarBox}>
      <Stack justifyContent="space-around" direction="row" alignItems="center" spacing={2}>
        <Typography variant="body1">© Ting Zhi Hao</Typography>
        <Button sx={bottomBarButton}>Contact</Button>
      </Stack>
    </Box>
  );
}

export default BottomBar;
