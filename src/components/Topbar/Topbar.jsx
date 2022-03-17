import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Box, Typography, Button, Container} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const pages = ["portfolio", "about"];

const TopAppBar = styled(AppBar)({
  marginBottom: '10px',
  spacing: '2',
  position: 'static'
});


const Topbar = () => {
  return (
    <TopAppBar>
      <Container maxWidth="l">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Box component={Link} to="/about" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
      </Toolbar>
      </Container>
    </TopAppBar>
  );
};

export default Topbar;
