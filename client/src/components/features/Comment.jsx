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
    <section id="comments" class="bg-none">
      <div class="container-lg">
        <div class="text-center">
          <h2 class="my-4">Featured Comments</h2>
          {props.comment.map(comments => (
            <>
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="list-group">
                    <div class="list-group-item py-3 my-1">
                      <h3>Cat: <small>{comments.fields.name}</small></h3>
                      <p>{comments.fields.comments}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Comment;

