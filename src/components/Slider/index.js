// ==IMPORT BOOTSTRAP==
import Carousel from 'react-bootstrap/Carousel';

// ==--IMPORT IMAGE--==
import first from '../../docs/images/first.png'
import second from '../../docs/images/second.png'
import third from '../../docs/images/third.png'

// ==--IMPORT STYLE--==
import './style.scss'

function Slider() {
  return (
    
    //==--COMPONENT SLIDER--==
    <Carousel className="slider">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={first}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={second}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={third}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    //==--COMPONENT SLIDER--==

  );
}

export default Slider;