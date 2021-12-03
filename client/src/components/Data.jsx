import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

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

  const { title, synopsis, review, rating, image } = film.fields

  return (
    <div>
      {
        <>
          <img style={{ width: 200, height: 300 }} src={image} alt="MoviePoster" />
          <h2>{title}</h2>
          <h2>{synopsis}</h2>
          <h2>{review}</h2>
          <h2>{rating}</h2>
          <Link to={`/edit/${film.id}`}>Edit Meow-vie Review</Link>
        </>
      }

    </div>
  );
}

export default Data;