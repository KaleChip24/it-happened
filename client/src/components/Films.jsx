import { Link } from 'react-router-dom'


function Films(props) {


  return (
    <div className="home-posters">
      {
        props.films.map(film => (
          <div key={film.id} className="movie-posters">
            <Link
              to={`/films/${film.id}`}
            >{<img style={{
              width: 200,
              height: 300,
              padding: 10,
              borderRadius: 20
            }} src={film.fields.image} alt="MoviePoster" />}</Link>
            <h2 className="film-title">{film.fields.title}</h2>
          </div>
        ))
      }
    </div >
  );
};

export default Films;