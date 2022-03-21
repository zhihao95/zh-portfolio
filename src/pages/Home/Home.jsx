import React from 'react';
import {
  Container,
  Box,
  Divider,
  Stack,
  Typography,
  Button,
  ImageListItem,
} from '@mui/material';
import { styled } from '@mui/system';
import { DRAWER_OPEN } from '../../components/Actions/actions';
import { useDrawerOpenContext } from '../../components/Contexts/Contexts';
import MediaCard from './components/MediaCard/MediaCard';

const ImageGalleryList = styled('ul')(({ theme }) => ({
  display: 'grid',
  padding: 0,
  margin: theme.spacing(0, 4),
  gap: 8,
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

const bannerContainer = {
  // backgroundRepeat: "no-repeat",
  // backgroundImage: `url(${HomeBanner})`,
  backgroundSize: 'contain',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  height: { xs: '75vh', md: '55vh' },
  overflow: 'hidden',
  width: '100%',
};

const bannerBox = {
  direction: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  display: { xs: 'flex', md: 'flex' },
  width: '100%',
};

const cardContainer = {
  alignItems: 'center',
  backgroundSize: 'contain',
  justifyContent: 'center',
  display: 'flex',
  overflow: 'hidden',
  width: '100%',
};

const imageListBox = {
  direction: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  display: { xs: 'flex', md: 'flex' },
  width: '100%',
};

const itemData = [
  {
    img: 'https://youtube.com/embed/oryZVKhr-6Y',
    title: 'Shootjectory',
    description: 'A turn based physics based strategy game where players attack enemies with projectiles that can manipulate their position and facing direction turning them against each other.',
  },
  {
    img: 'https://youtube.com/embed/YLbtdo8Ag7A',
    title: 'Spaceza Hut',
    description: 'A 3D first person runner race against time game in which the player is required to deliver pizza in space with a limited amount of time. ',
  },
  {
    img: 'https://youtube.com/embed//PZkXb3WUJSI',
    title: 'Hero Illapse',
    description: 'A rogue like top down shooter where the main focus is on defeating randomly generated unique bosses and collecting randomized powerups from bosses. The objective of the game is to defeat all 4 bosses in a single playthrough by shooting enemies to defeat them and avoiding projectiles and or boss attacks. ',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   title: 'My Portfolio',
  // },
];

function Home() {
  const { dispatch } = useDrawerOpenContext();

  const openDrawer = () => {
    dispatch({ type: DRAWER_OPEN, payload: true });
  };

  return (
    <Box>
      <Container maxWidth="100%" sx={bannerContainer}>
        <Box sx={bannerBox}>
          <Stack spacing={3.5}>
            <Typography variant="h5">Hi there, I&apos;m</Typography>
            <Typography variant="h2">Ting Zhi Hao</Typography>
            <Divider color="white" orientation="horizontal" flexItem />
            <Typography variant="h6">
              Software developer | Game Engine Programmer
            </Typography>
            <Typography sx={{ textAlign: 'center' }} variant="h6">
              <Button
                onClick={() => openDrawer()}
                variant="contained"
                color="success"
              >
                Contact Me
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
            <ImageGalleryList>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <MediaCard img={item.img} header={item.title} body={item.description} />
                </ImageListItem>
              ))}
            </ImageGalleryList>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
