import { Link } from 'react-router-dom'
import { useEffet, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Featured(props, id) {

  return (
    <div>
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
          <img style={{ width: 400, height: 300 }} src={props.features.fields.image} alt="Cat" />
        </div>
      }
    </div>
  );
}

export default Featured;



{/* <Carousel variant="dark">
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
</Carousel> */}

{/* <Carousel varient="dark"
            key={feature.id}>
            <Carousel.Item>
              {/* <div className="cats"> */
  //   <Link
  //     to={`/featured/${feature.id}`}>{<img style={{ width: 400, height: 300 }} src={feature.fields.image} alt="Cat" />}</Link>
  //   <Carousel.Caption>
  //     <h2>{feature.fields.name}</h2>
  //   </Carousel.Caption>
  //   {/* </div> */}
  // </Carousel.Item>
  // </Carousel> *
}

