import { Link } from 'react-router-dom'
// import { useEffet, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import FeatForm from './FeatForm';
import Comment from './Comment';

function Featured(props, id) {

  return (
    <>
      <div className="carousel-wrap">
        {props.features.length > 1 ?
          <Carousel> {
            props.features.map((feature, id) => (
              <Carousel.Item key={feature.id}>
                <div className="cats" key={feature.id}>
                  <Link
                    to={`/featured/${feature.id}`}>{<img style={{ width: 400, height: 300 }} src={feature.fields.image} alt="Cat" />}</Link>
                  <Carousel.Caption>
                    <h2>{feature.fields.name}</h2>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))
          }
          </Carousel>
          :
          <div className="features-image">
            <img style={{ width: 400, height: 300 }} src={props.features.image} alt="Cat" />
          </div>
        }
      </div>
      <h4 className="feat-h4" >Who do you think should be our next Featured Feline?</h4>
      <FeatForm setToggle={props.setToggle} />
      <Comment comment={props.comment} setToggle={props.setToggle} />
    </>
  );
}

export default Featured;

