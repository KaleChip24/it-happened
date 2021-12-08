import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom'
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

  return (
    <section id="comments" className="bg-none">
      <div className="container-lg">
        <div className="text-center my-2">
          {props.comment.map(comments => (
            <div className="commentId-container" key={comments.id}>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="list-group">
                    <div className="list-group-item py-3 my-1">
                      <h3>Cat: <small>{comments.fields.name}</small></h3>
                      <p>{comments.fields.comments}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Comment;

