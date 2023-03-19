import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import styles from './OfferBox.module.scss';
import { Link } from 'react-router-dom';

const OfferBox = (props) => {
  return (
    <Card className={styles.root}>
      <Card.Img variant="top" src={`./images/products/${props.image}`} />
      <Card.Body className="text-center">
        <Col className="d-flex justify-content-center">
          {props.oldPrice > 0 ? (
            <>
              <p className={styles.categories}>For {props.category}</p>
              <p className={styles.sale}>SALE</p>
            </>
          ) : (
            <p className={styles.categories}>For {props.category}</p>
          )}
        </Col>
        <Card.Title className={styles.cardTitle}>{props.name}</Card.Title>
        <Card.Text className="m-0">
          {props.oldPrice > 0 ? (
            <div className={'d-flex justify-content-center ' + styles.priceDiv}>
              <span className={styles.price}>${props.price}</span>
              <span className={styles.oldPrice}>${props.oldPrice}</span>
            </div>
          ) : (
            <div className={'d-flex justify-content-center ' + styles.priceDiv}>
              <span className={styles.normalPrice}>${props.price}</span>
            </div>
          )}
        </Card.Text>
        <Link to={'/product/' + props.id}>
          <Button variant="outline-secondary" size="sm" className="mx-1 mb-1">
            View more
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default OfferBox;