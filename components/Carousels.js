import Carousel from 'react-bootstrap/Carousel'
import {useState} from 'react';
import Image from "next/image";
const Carousels = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image
          layout="responsive" height={350} width={180}
            className="d-block w-100"
            src="https://res.cloudinary.com/guitarra/image/upload/v1646912574/thumbnail_b2_4aafcb5f8f.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
          layout="responsive" height={350} width={180}
            className="d-block w-100"
            src="https://res.cloudinary.com/guitarra/image/upload/v1646912573/b2_4aafcb5f8f.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
          layout="responsive" height={350} width={180}
            className="d-block w-100"
            src="https://res.cloudinary.com/guitarra/image/upload/v1646919023/thumbnail_a3_f25bbdb9da.jpg"
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
    );
  }
  
  export default Carousels;