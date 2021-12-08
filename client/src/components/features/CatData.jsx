import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
import FeatCard from "./FeatCard";

import React from 'react';

function CatData(props) {
  const [cats, setCats] = useState(null)
  const params = useParams()

  useEffect(() => {
    const catData = props.features.find(feature => {
      return feature.id === params.id
    })
    if (catData) {
      setCats(catData)
    }
  }, [params.id, props.features])

  if (!cats) return <h1> Loading ... </h1>

  return (
    <Container padding={10}>
      <Grid>
        <div className="cat-data">
          {
            cats && cats.fields &&
            <>
              <Grid item key={cats.id}>
                <FeatCard cats={cats} />
              </Grid>
              <Link to="/featured">Back</Link>
            </>
          }
        </div>

      </Grid>
    </Container>
  );
}

export default CatData;