import React from "react";

export function HomeBanner({
  bannerContainer,
  bannerStack
}) {
  return <Container maxWidth="100%" sx={bannerContainer}>
        <Box sx={bannerStack}>
          <Stack spacing={3.5}>
            <Typography variant="h5">Hi there, I'm</Typography>
            <Typography variant="h2">Ting Zhi Hao</Typography>
            <Divider color="white" orientation="horizontal" flexItem />
            <Typography variant="h6">
              Software developer | Game Engine Programmer
            </Typography>
            <Typography sx={{
          textAlign: "center"
        }} variant="h6">
              <Button variant="contained" color="success">
                Contact Me
              </Button>
          </Typography>
          </Stack>

        </Box>
      </Container>;
}
  