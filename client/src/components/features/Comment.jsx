import React from 'react';

function Comment(props) {
  return (
    <div>
      <section className="comment-box">
        {
          props.comments.map(comment => (
            <div key={comment.id} className="comment-data">
              <h3>{comment.fields.name}</h3>
              <p>{comment.fields.comments}</p>
            </div>
          ))
        }

      </section>
    </div>
  );
}

export default Comment;