import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { deleteComments } from '../../services/index'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from 'react-bootstrap';

function Comment(props) {
  const params = useParams()
  const nav = useNavigate()

  // const handleDelete = async () => {
  //   const res = await deleteComments(params.id)
  //   props.setToggle(e => !e)
  //   if (res) {
  //     nav(`/featured`)
  //   }

  return (
    <Container>
      <Grid container>
        {props.comment.map(comments => (
          <Grid item key={comments.id} className="comment-data" xs={12} md={6} lg={4}>
            <Paper>
              <p>{comments.fields.comments}</p>
              <h3>{comments.fields.name}</h3>
              {/* <button onClick={handleDelete}>DELETE</button> */}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Comment;

