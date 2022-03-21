import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  CardMedia, Card, CardContent, CardActions, Typography, Button, Box, ButtonGroup,
} from '@mui/material';
import { DoubleArrow } from '@mui/icons-material';

function MediaCard({
  img, header, body, link, downloadLink,
}) {
  return (
    <Card>
      <CardMedia
        component="iframe"
        image={img}
        alt={img}
        sx={{
          position: 'flex',
          top: 0,
          left: 0,
          height: '50vh',
          width: '100%',
        }}
      />
      <CardContent sx={{ backgroundColor: 'black' }}>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
      <CardActions sx={{ backgroundColor: 'black' }}>
        <Box sx={{ display: 'flex', marginLeft: 'auto' }}>
          <ButtonGroup>
            <Button
              component={Link}
              to={downloadLink}
              key={downloadLink}
              variant="contained"
              color="success"
              size="small"
            >
              Download

            </Button>
            <Button
              component={Link}
              to={`/${link}`}
              key={link}
              variant="contained"
              color="success"
              size="small"
            >
              {'Learn more '}
              <DoubleArrow />
            </Button>
          </ButtonGroup>
        </Box>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  img: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.string,
  link: PropTypes.string,
  downloadLink: PropTypes.string,
};

MediaCard.defaultProps = {
  img: '',
  header: '',
  body: '',
  link: '',
  downloadLink: '',
};

export default MediaCard;
