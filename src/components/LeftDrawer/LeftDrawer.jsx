import React from 'react';
import {
  Box,
  Drawer,
  Container,
  Stack,
  Avatar,
  Typography,
  Button,
} from '@mui/material';
import {
  Email, LinkedIn, GitHub, Facebook, Instagram, ArrowBackIos,
} from '@mui/icons-material';
import { DRAWER_OPEN } from '../Actions/actions';
import { useDrawerOpenContext } from '../Contexts/Contexts';
import MyPhoto from '../../resources/images/MyPhoto.jpg';

function LeftDrawer() {
  const { drawerOpen, dispatch } = useDrawerOpenContext();

  const buttonStyle = { color: 'white' };

  const drawerStyle = {
    bgcolor: 'primary.main',
    justifyContent: 'center',
    height: '100vh',
    width: '300px',
    overflow: 'hidden',
  };

  const drawerContainer = {
    marginTop: '15vh',
    justifyContent: 'center',
    display: { xs: 'flex', md: 'flex' },
    width: '100%',
  };

  const avatarStyle = {
    height: '10vh',
    width: '10vh',
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    dispatch({ type: DRAWER_OPEN, payload: open });
  };

  const drawer = (
    <Box sx={drawerStyle}>
      <Box onClick={toggleDrawer(false)} sx={{ position: 'absolute', marginLeft: '83%' }}><Button sx={buttonStyle}><ArrowBackIos /></Button></Box>
      <Container sx={drawerContainer}>
        <Stack spacing={3} sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>

          <Avatar src={MyPhoto} sx={avatarStyle} />
          <Typography sx={{ display: 'flex' }}>
            <Email sx={{ minWidth: '50px' }} />
            {'  zhihao_ting@outlook.com'}
          </Typography>
          <Button sx={buttonStyle}><LinkedIn /></Button>
          <Button sx={buttonStyle}><GitHub /></Button>
          <Button sx={buttonStyle}><Facebook /></Button>
          <Button sx={buttonStyle}><Instagram /></Button>
        </Stack>
      </Container>
    </Box>
  );

  return (
    <Box>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </Box>
  );
}

export default LeftDrawer;
