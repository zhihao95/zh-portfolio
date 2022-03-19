import React from "react";
import {
  Container,
  Box,
  Divider,
  Stack,
  Typography,
  Button,
  ImageList,
  ImageListItem,
} from "@mui/material";

const bannerContainer = {
  // backgroundRepeat: "no-repeat",
  // backgroundImage: `url(${HomeBanner})`,
  backgroundSize: "contain",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  height: { xs: "75vh", md: "55vh" },
  overflow: "hidden",
  width: "100%",
};

const bannerBox = {
  direction: "column",
  alignItems: "center",
  justifyContent: "center",
  display: { xs: "flex", md: "flex" },
  width: "100%",
};

const cardContainer = {
  alignItems: "center",
  backgroundSize: "contain",
  justifyContent: "center",
  display: "flex",
  overflow: "hidden",
  width: "100%",
};

const imageListBox = {
  direction: "column",
  alignItems: "center",
  justifyContent: "center",
  display: { xs: "flex", md: "flex" },
  width: "100%",
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const Home = () => {
  return (
    <Box>
      <Container maxWidth="100%" sx={bannerContainer}>
        <Box sx={bannerBox}>
          <Stack spacing={3.5}>
            <Typography variant="h5">Hi there, I'm</Typography>
            <Typography variant="h2">Ting Zhi Hao</Typography>
            <Divider color="white" orientation="horizontal" flexItem />
            <Typography variant="h6">
              Software developer | Game Engine Programmer
            </Typography>
            <Typography sx={{ textAlign: "center" }} variant="h6">
              <Button variant="contained" color="success">
                Contact Me (WIP)
              </Button>
            </Typography>
          </Stack>
        </Box>
      </Container>
      <Container maxWidth="100%" sx={cardContainer}>
        <Box sx={imageListBox}>
          <Stack spacing={3.5}>
            <Typography variant="h4">Projects</Typography>
            <Divider color="white" orientation="horizontal" flexItem />
            <ImageList cols={2} gap={10} >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img src={item.img} alt={item.alt} />
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
