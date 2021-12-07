import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { deleteFilms } from '../services/index'
import StarRatings from 'react-star-ratings'

function Data(props) {
  const [film, setFilm] = useState(null)
  const params = useParams()
  const nav = useNavigate()

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

  const { title, synopsis, review, rating, image } = film.fields

  return (
    <div className="film-details">
      {film && film.fields &&
        <>
          <img style={{ width: 200, height: 300 }} src={image} alt="MoviePoster" />
          <h2>{title}</h2>
          <h2>{synopsis}</h2>
          <h2>{review}</h2>
          {/* <h2>{rating}</h2> */}
          <StarRatings rating={rating} starRatedColor="yellow" numberOfStars={5} name="rating" size={5} />
          {/* <Link to={`/edit/${film.id}`}>Edit Meow-vie Review</Link>
          <button onClick={handleDelete}>Scratch. It. Out!</button> */}
        </>
      }

    </div>
  );
}

export default Data;