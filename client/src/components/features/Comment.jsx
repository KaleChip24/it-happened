import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { deleteComments } from '../../services/index'

function Comment(props) {
  const params = useParams()
  const nav = useNavigate()

  const handleDelete = async () => {
    const res = await deleteComments(params.id)
    props.setToggle(e => !e)
    if (res) {
      nav(`/featured`)
    }
  }
  return (
    <div className="comment-box">
      {
        props.comment.map(comments => (
          <div key={comments.id} className="comment-data">
            <h3>{comments.fields.name}</h3>
            <p>{comments.fields.comments}</p>
            <button onClick={handleDelete}>DELETE</button>
          </div>
        ))
      }

    </div>
  );
}

export default Comment;

// props.comment && props.comment.fields &&