import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import FilmCard from './FilmCard'
import { Container, Grid } from '@mui/material'

function Data(props) {
  const [film, setFilm] = useState(null)
  const params = useParams()


  useEffect(() => {
    const filmData = props.films.find(film => {
      return film.id === params.id
    })
    if (filmData) {
      setFilm(filmData)
    }
  }, [params.id, props.films])

  if (!film) return <h1> Loading... </h1>

  return (
    <Container>
      <Grid container margin={"auto"}>
        <div className="film-details">
          {film && film.fields &&
            <Grid item key={film.id}>
              <FilmCard film={film} />
              <Link to="/">Back</Link>
            </Grid>
          }
        </div>
      </Grid>
    </Container>
  );
}

export default Data;