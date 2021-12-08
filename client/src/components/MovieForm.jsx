import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import { postFilms } from '../services/index'
import Form from 'react-bootstrap/Form'

function MovieForm(props) {
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
      if (filmData) {
        setTitle(filmData.fields.title)
        setImage(filmData.fields.image)
        setSynopsis(filmData.fields.synopsis)
        setReview(filmData.fields.review)
        setRating(filmData.fields.rating)

      }
    }
  }, [params.id, props.films])


  const handleSubmit = async (e) => {
    e.preventDefault()
    const newFilm = {
      title,
      image,
      synopsis,
      review,
      rating,
    }

    if (props.films) {
      //   const res = await editFilms(newFilm, params.id)
      //   props.setToggle(e => !e)
      //   if (res) {
      //     nav(`/films/${params.id}`)
      //   }
      // } else {
      const res = await postFilms(newFilm)
      props.setToggle(e => !e)
      if (res) {
        nav('/')
      }

    }
  }

  return (

    <section>
      <div class="container-lg">
        <div class="text-center">
          <h3>Does your cat have a Purrfect review? Add below!</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title.input">
            <Form.Label for="title" className="form-lable">Title</Form.Label>
            <input
              type="text"
              value={title}
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

          <label for="image" className="form-lable">URL</label>
          <input
            type="text"
            value={image}
            name="image"
            placeholder="Meow-vie Poster URL"
            onChange={(e) => setImage(e.target.value)} />

          <label for="synopsis" className="form-lable">Synopsis</label>
          <textarea
            type="text"
            value={synopsis}
            name="synopsis"
            placeholder="Meow kitty meow meow"
            onChange={(e) => setSynopsis(e.target.value)}>
          </textarea>

          <label for="review" className="form-lable">Review</label>
          <input
            type="text"
            value={review}
            name="review"
            placeholder="Review"
            onChange={(e) => setReview(e.target.value)} />

          <label for="subject" className="form-lable">Rating</label>
          <input
            type="number"
            value={rating}
            name="rating"
            onChange={(e) => setRating(e.target.valueAsNumber)} />
          <button>Paw Me!</button>
        </Form>
      </div>
    </section>

  );
}

export default MovieForm;