import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

function FeatCard({ cats }) {

  const { name, movie, image, description } = cats.fields

  return (
    <div className="film-card my-5">
      <Card elevation={5}>
        <img style={{ width: 400, height: 300, paddingTop: 10 }} src={image} alt="MoviePoster" />
        <CardHeader
          title={name}
          subheader={movie}
        />
        <CardContent>
          <Typography varient='body2'>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeatCard;

