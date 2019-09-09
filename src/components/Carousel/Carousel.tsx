import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export interface ICarouselProps {
  images?: Image[];
}

export interface Image {
  url: string;
  alt: string;
}

const ControlledCarousel: React.FC<ICarouselProps> = ({
  images
}: ICarouselProps) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dnkfgmzy1/image/upload/v1568025353/css-frameworks/izrfdkcy8koqdkqnkxbx.jpg"
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
          src="https://res.cloudinary.com/dnkfgmzy1/image/upload/v1568025353/css-frameworks/vq9ipcgjgpqnnlaf9yv5.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dnkfgmzy1/image/upload/v1568025353/css-frameworks/mjyecwxhoctnbdsprnmc.jpg"
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
};

export default ControlledCarousel;
