import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import StarRatings from 'react-star-ratings';
import { IconButton } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material'

function FilmCard({ film }) {

  const { title, synopsis, review, rating, image } = film.fields

  return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton>
              <DeleteOutlined />
            </IconButton>
          }
          title={title}
          subheader={synopsis}
        />
      </Card>
    </div>
  );
};

export default FilmCard;


{/* <img style={{ width: 200, height: 300 }} src={image} alt="MoviePoster" />
<h2>{title}</h2>
<p>{synopsis}</p>
<p>{review}</p>
<StarRatings rating={rating} starRatedColor="yellow" numberOfStars={5} name="rating" /> */}