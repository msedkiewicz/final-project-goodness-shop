import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './CarouselHome.module.scss';
import Button from 'react-bootstrap/Button';

const CarouselHome = () => {
  return (
    <Carousel fade className={styles.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src=".\images\carousel\kindness.jpg"
          alt="Kindness"
        />
        <Carousel.Caption>
          <div className={styles.content}>
            <h2>Kindness</h2>
            <p>If you need something to brigten your day.</p>
            <Button className={styles.btn} variant="light">
              I need it!
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=".\images\carousel\peace.jpg"
          alt="Peace"
        />

        <Carousel.Caption>
          <div className={styles.content}>
            <h2>Peace</h2>
            <p>Most useful on Mondays!</p>
            <Button className={styles.btn} variant="light">
              I need it!
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=".\images\carousel\smile.jpg"
          alt="Smile"
        />

        <Carousel.Caption>
          <div className={styles.content}>
            <h2>Smile</h2>
            <p>To warm up your heart!</p>
            <Button className={styles.btn} variant="light">
              I need it!
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=".\images\carousel\coffee.jpg"
          alt="Coffee"
        />

        <Carousel.Caption>
          <div className={styles.content}>
            <h2>Coffee</h2>
            <p>Is good for everything!</p>
            <Button className={styles.btn} variant="light">
              I need it!
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
