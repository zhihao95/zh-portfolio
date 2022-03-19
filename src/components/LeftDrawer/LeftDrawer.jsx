import React from "react";
import { Box, Drawer, Container, Typography } from "@mui/material";
import { DRAWER_OPEN } from "../Actions/actions";
import { useDrawerOpenContext } from "../Contexts/Contexts";

const LeftDrawer = () => {

  const {drawerOpen, dispatch} = useDrawerOpenContext();

  

  const drawerStyle = {
    bgcolor : "primary.main",
    justifyContent: "center",
    display: "flex",
    height : "100vh",
    width : "300px",
    overflow: "hidden",
  }

  const drawerContainer = {
    marginTop : "10vh",
    justifyContent: "center",
    display: { xs: "flex", md: "flex" },
    width: "100%",
  }


  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch({ type: DRAWER_OPEN, payload: false });
  };

  const drawer = (
    <Box sx={drawerStyle}>
      <Container sx={drawerContainer}>
        <Typography>YEA BOI</Typography>
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
};

export default LeftDrawer;
