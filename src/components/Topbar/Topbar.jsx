import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {
  Toolbar,
  Box,
  Button,
  ButtonGroup,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { DRAWER_OPEN } from '../Actions/actions';
import { useDrawerOpenContext } from '../Contexts/Contexts';

const pages = ['home', 'about', 'portfolio', 'projects'];

const TopAppBar = {
  spacing: '4',
  position: 'static',
  width: '100%',
  display: 'flex',
};

const NavElementBox = {
  display: 'flex',
  marginLeft: 'auto',
};

const ButtonStyle = { my: 2, color: 'white', display: 'block' };

function Topbar() {
  const { drawerOpen, dispatch } = useDrawerOpenContext();

  return (
    <AppBar sx={TopAppBar}>
      <Toolbar>
        <Button
          onClick={() => dispatch({ type: DRAWER_OPEN, payload: !drawerOpen })}
          key="Open"
          sx={{ ...ButtonStyle }}
        >
          <MenuIcon />
        </Button>
        <Box sx={NavElementBox}>
          <ButtonGroup
            variant="text"
            color="secondary"
            aria-label="text button group"
          >
            {pages.map((page) => (
              <Button
                component={Link}
                to={`/${page}`}
                key={page}
                sx={{ ...ButtonStyle, right: 0 }}
              >
                {page}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
