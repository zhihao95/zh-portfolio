import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const AboutStack = styled('Stack')({
  marginBottom: '10px',
  spacing: '2',
  textAlign: "center"
});

const About = () => {
  return (
    <div>
      <AboutStack>
        <Box sx={{ width: '100%' }}>Item 1</Box>
        <Box sx={{ width: '100%' }}>Item 2</Box>
        <Box sx={{ width: '100%' }}>Item 3</Box>
      </AboutStack>
    </div>
  );
};

export default About;
