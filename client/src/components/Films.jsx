import { Link } from 'react-router-dom'

function Films(props) {
  return (
    <div>
      {
        props.films.map(film => (
          <div key={film.id}>
            <Link
              to={`/films/${film.id}`}
            >{<img style={{ width: 200, height: 300 }} src={film.fields.image} alt="MoviePoster" />}</Link>
            <h2 className="film-title">{film.fields.title}</h2>
          </div>
        ))
      }
    </div >
  );
};

export default Films;