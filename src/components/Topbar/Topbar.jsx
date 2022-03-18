import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  ButtonGroup,
} from "@mui/material";
import { Link } from "react-router-dom";

const pages = ["about", "portfolio", "projects"];

const TopAppBar = {
  spacing: "4",
  position: "static",
};

const NavElementBox = {
  display: "flex",
};

const Topbar = () => {
  return (
    <AppBar sx={TopAppBar}>
      <Container maxWidth="l">
        <Toolbar>
          <Button
            component={Link}
            to={`/`}
            key="Home"
            sx={{ my: 2, color: "white", display: "block", flexGrow: 1 }}
          >
            <Typography variant="h6" component="div">
              Home
            </Typography>
          </Button>
          <Box sx={NavElementBox}>
            <ButtonGroup variant="text" color="secondary" aria-label="text button group">
              {pages.map((page) => (
                <Button
                  component={Link}
                  to={`/${page}`}
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Topbar;
