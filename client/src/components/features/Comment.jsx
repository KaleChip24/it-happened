import React from 'react';

function Comment(props) {
  return (
    <div className="comment-box">
      {
        props.comment.map(comments => (
          <div key={comments.id} className="comment-data">
            <h3>{comments.fields.name}</h3>
            <p>{comments.fields.comments}</p>
          </div>
        ))
      }

    </div>
  );
}

export default Comment;

// props.comment && props.comment.fields &&