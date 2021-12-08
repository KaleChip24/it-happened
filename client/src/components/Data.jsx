import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import FilmCard from './FilmCard'
import { Grid } from '@mui/material'

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

  // const handleDelete = async () => {
  //   const res = await deleteFilms(params.id)
  //   props.setToggle(e => !e)
  //   if (res) {
  //     nav(`/`)
  //   }
  // }

  if (!film) return <h1> Loading... </h1>

  // const { title, synopsis, review, rating, image } = film.fields

  return (
    <Grid container>

      <div className="film-details">
        {film && film.fields &&
          <>
            {/* <img style={{ width: 200, height: 300 }} src={image} alt="MoviePoster" /> */}
            {/* <h2>{title}</h2> */}
            {/* <h2>{synopsis}</h2> */}
            <FilmCard film={film} />
            {/* <h2>{rating}</h2> */}
            {/* <StarRatings rating={rating} starRatedColor="yellow" numberOfStars={5} name="rating" /> */}
            {/* <Link to={`/edit/${film.id}`}>Edit Meow-vie Review</Link>
          <button onClick={handleDelete}>Scratch. It. Out!</button> */}
          </>
        }
      </div>
    </Grid>
  );
}

export default Data;