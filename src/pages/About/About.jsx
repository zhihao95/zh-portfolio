import React from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";

const aboutBox = {
  height : "100vh"
};

const About = () => {
  return (
    <Box sx={aboutBox}>
      <Stack>
        <Box sx={{ width: '100%' }}>Item 1</Box>
        <Box sx={{ width: '100%' }}>Item 2</Box>
        <Box sx={{ width: '100%' }}>Item 3</Box>
      </Stack>
    </Box>
  );
};

export default About;
