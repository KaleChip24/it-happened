import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

function Featured(props) {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          {
            props.features.map(feature => (
              <div className="cats" key={feature.id}>
                <Link
                  to={`/featured/${feature.id}`}>{<img style={{ width: 400, height: 300 }} src={feature.fields.image} alt="Cat" />}</Link>
                <h2>{feature.fields.name}</h2>
              </div>
            ))
          }
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Featured;