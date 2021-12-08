import { Container } from 'react-bootstrap';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom'




function Films(props) {


  return (
    <Container className="home-posters">
      <Grid container >
        {
          props.films.map(film => (
            <Grid item key={film.id} className="movie-posters" lg={5} marginTop={10} marginRight={"auto"} marginBottom={10}>
              <Link
                to={`/films/${film.id}`}
              >{<img style={{
                width: 200,
                height: 300,
                padding: 10,
                borderRadius: 20
              }} src={film.fields.image} alt="MoviePoster" />}</Link>
              <h2 className="film-title">{film.fields.title}</h2>
            </Grid>
          ))
        }
      </Grid>
    </Container >
  );
};

export default Films;