import { Link } from 'react-router-dom'

function Featured(props) {
  return (
    <div>
      {
        props.features.map(feature => (
          <div className="cats" key={feature.id}>
            <Link
              to={`/featured/${feature.id}`}>{<img style={{ width: 400, height: 300 }} src={feature.fields.image} alt="Cat" />}</Link>
            <h2>{feature.fields.name}</h2>
          </div>
        ))
      }

    </div>
  );
}

export default Featured;