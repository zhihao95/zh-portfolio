import React from "react";
import { Container, Box, Divider, Stack, Typography, Button } from "@mui/material";
import HomeBanner from "../../resources/images/HomeBanner.png";

const bannerContainer = {
  // backgroundRepeat: "no-repeat",
  // backgroundImage: `url(${HomeBanner})`,
  backgroundSize: "contain",
  backgroundColor: "black",
  alignItems: "center",
  justifyContent: "center",
  display: "flex" ,
  height: { xs : "100vh", md : "55vh" },
  overflow: 'hidden',
  width: "100%",
};

const bannerStack = {
  direction: "column",
  alignItems: "center",
  justifyContent: "center",
  display: { xs: "flex", md : "flex" },
  width: "100vh",
};

const Home = () => {
  return (
    <Box>
      <Container maxWidth="100%" sx={bannerContainer}>
        <Box sx={bannerStack}>
          <Stack spacing={3.5}  >
            <Typography variant="h5">Hi there, I'm</Typography>
            <Typography variant="h2">Ting Zhi Hao</Typography>
            <Divider color="white" orientation="horizontal" flexItem />
            <Typography variant="h6">
              Software developer | Game Engine Programmer
            </Typography>
            <Typography sx={{ textAlign: "center" }} variant="h6">
              <Button variant="contained" color="success">
                Contact Me
              </Button>
          </Typography>
          </Stack>

        </Box>
        
        
      </Container>
      
    </Box>
  );
};

export default Home;
