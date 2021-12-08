import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import StarRatings from 'react-star-ratings';
import { Typography } from '@mui/material';

function FilmCard({ film }) {

  const { title, synopsis, review, rating, image } = film.fields

  return (
    <div className="film-card">
      <Card elevation={5}>
        <img style={{ width: 200, height: 300, paddingTop: 10 }} src={image} alt="MoviePoster" />
        <CardHeader
          title={title}
          subheader={synopsis}
        />
        <CardContent>
          <Typography varient='body2'>
            {review}
          </Typography>
        </CardContent>
        <CardContent>
          <StarRatings rating={rating} starRatedColor="lightseagreen" numberOfStars={5} name="rating" />
        </CardContent>
      </Card>
    </div>
  );
};

export default FilmCard;

