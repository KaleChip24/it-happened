import { Link } from 'react-router-dom'

function Films(props) {
  return (
    <div>
      {
        props.films.map(film => (
          <span>
            <Link
              to={`/films/${film.id}`}
              key={film.id}
            >{<img style={{ width: 200, height: 300 }} src={film.fields.image} alt="MoviePoster" />}</Link>
            <h2 className="film-title" key={film.title}>{film.fields.title}</h2>
          </span>
        ))
      }
    </div >
  );
};

export default Films;