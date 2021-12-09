import React from 'react';
// import { useNavigate, useParams } from 'react-router-dom'
// import { deleteComments } from '../../services/index'

function Comment(props) {
  // const params = useParams()
  // const nav = useNavigate()

  // const handleDelete = async () => {
  //   const res = await deleteComments(params.id)
  //   props.setToggle(e => !e)
  //   if (res) {
  //     nav(`/featured`)
  //   }
  // }

  return (
    <div className="comments-container">
      <section id="comments" className="bg-none">
        <div className="container-lg">
          <div className="text-center my-2">
            {props.comment.map(comments => (
              <div className="commentId-container" key={comments.id}>
                <div className="row justify-content-center">
                  <div className="col-sm-8">
                    <div className="list-group">
                      <div className="list-group-item py-3 my-2">
                        <h3>Cat: <small>{comments.fields.name}</small></h3>
                        <p>{comments.fields.comments}</p>
                        {/* <button onClick={handleDelete}>Delete</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Comment;

