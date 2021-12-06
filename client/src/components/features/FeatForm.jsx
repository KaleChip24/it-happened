import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { postComment } from '../../services';

function FeatForm(props) {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  // useEffect(() => {

  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newComment = {
      name,
      comment,
    }

    await postComment(newComment)
  }

  return (
    <form className="feat-form" onSubmit={handleSubmit}>
      <input type="text" value={name} name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="textArea" value={comment} name="comment" placeholder="Why?" onChange={(e) => setComment(e.target.value)} />

      <button>Comment</button>
    </form>
  );
}

export default FeatForm;