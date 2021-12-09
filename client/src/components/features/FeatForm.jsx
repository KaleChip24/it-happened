import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { postComment } from '../../services';

function FeatForm(props) {
  const [name, setName] = useState('')
  const [comments, setComments] = useState('')
  const nav = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (props.comments) {
      const commentData = props.comments.find(comment => {
        return comment.id === params.id
      })
      if (commentData) {
        setName(commentData.fields.title)
        setComments(commentData.fields.image)
      }
    }
  }, [params.id, props.comments])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newComment = {
      name,
      comments,
    }

    const res = await postComment(newComment)
    props.setToggle(e => !e)
    if (res) {
      nav(`/`)
    }
  }

  return (
    <form className="feat-form" onSubmit={handleSubmit}>
      <input type="text"
        value={name}
        name="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)} />
      <input type="textArea"
        value={comments}
        name="comment"
        placeholder="Why?"
        onChange={(e) => setComments(e.target.value)} />

      <button>Comment</button>
    </form>
  );
}

export default FeatForm;