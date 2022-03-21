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
      <Box onClick={toggleDrawer(false)} sx={{ position: 'flex', marginLeft: '85%' }}><Button sx={buttonStyle}><ArrowBackIos /></Button></Box>
      <Container sx={drawerContainer}>
        <Stack spacing={3} sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <Avatar src={MyPhoto} sx={avatarStyle} />
          <Typography sx={{ display: 'flex' }}>
            <Email sx={{ minWidth: '50px' }} />
            {'  zhihao_ting@outlook.com'}
          </Typography>
          <Button target="_blank" href="https://www.linkedin.com/in/zhihao-ting" sx={buttonStyle}><LinkedIn /></Button>
          <Button target="_blank" href="https://github.com/zhihao95/zh-portfolio" sx={buttonStyle}><GitHub /></Button>
          <Button target="_blank" href="https://www.facebook.com/zhihao.ting" sx={buttonStyle}><Facebook /></Button>
          <Button target="_blank" href="https://www.instagram.com/zhi_haooo" sx={buttonStyle}><Instagram /></Button>
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
