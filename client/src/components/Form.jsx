import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import { postFilms } from '../services/index'

function Form(props) {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState(0)
  const params = useParams()
  const nav = useNavigate()


  useEffect(() => {
    if (props.films) {
      const filmData = props.films.find(film => {
        return film.id === params.id
      })
      // console.log(filmData)
      if (filmData) {
        setTitle(filmData.fileds.title)
        setImage(filmData.fileds.image)
        setSynopsis(filmData.fileds.synopsis)
        setReview(filmData.fileds.review)
        setRating(filmData.fileds.rating)

      }
    }
  }, [params.id, props.film])

  return (
    <>
      <section>
        <h3>Does your cat have a Purrfect review? Add below!</h3>
      </section>
      <form>
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Title"
          oncChange={(e) => setTitle(e.target.value)} />
        <input
          type="text"
          value={image}
          name="image"
          placeholder="Meow-vie Poster URL"
          oncChange={(e) => setImage(e.target.value)} />
        <input
          type="text"
          value={synopsis}
          name="synopsis"
          placeholder="Synopsis"
          oncChange={(e) => setSynopsis(e.target.value)} />
        <input
          type="text"
          value={review}
          name="review"
          placeholder="Review"
          oncChange={(e) => setReview(e.target.value)} />
        <br />
        <label>
          Rating: out of 5 Stars
          <input
            type="number"
            value={rating}
            name="rating"
            placeholder="Stars out of 5"
            oncChange={(e) => setRating(e.target.value)} />
        </label>
        <button>Paw Me!</button>
      </form>
    </>
  );
}

export default Form;