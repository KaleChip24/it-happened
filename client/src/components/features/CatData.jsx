import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom'

import React from 'react';

function CatData(props) {
  const [cats, setCats] = useState(null)
  const params = useParams()
  const nav = useNavigate

  useEffect(() => {
    const catData = props.features.find(feature => {
      return feature.id === params.id
    })
    if (catData) {
      setCats(catData)
    }
  }, [params.id, props.features])

  if (!cats) return <h1> Loading ... </h1>
  const { name, image, description } = cats.fields
  return (
    <div>
      {
        cats && cats.fields &&
        <>
          <img style={{ width: 400, height: 300 }} src={image} alt="Featured Cat" />
          <h2>{name}</h2>
          <p>{description}</p>
        </>
      }

    </div>
  );
}

export default CatData;