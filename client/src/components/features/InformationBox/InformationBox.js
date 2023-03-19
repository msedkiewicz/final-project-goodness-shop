import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styles from './InformationBox.module.scss';


const InformationBox = () => {
  return (
    <Row className={styles.informationbox}>
      <Col className={'col-9 '}>
        <div class={styles.card}>
          <div className={styles.img}>
            <div className={styles.content}>
              <h2>Peace</h2>{' '}
              <Button className={styles.btn} variant="light">
                I want it!
              </Button>
            </div>
            <img
              className={styles.img1}
              src=".\images\carousel\peace.jpg"
              alt="Second slide"
            ></img>
          </div>
          <div className={styles.img}>
            <div className={styles.content}>
              <h2>Coffee</h2>
              <Button className={styles.btn} variant="light">
                I want it!
              </Button>
            </div>
            <img src=".\images\carousel\coffee.jpg" alt="Second slide"></img>
          </div>
          <div className={styles.img}>
            <div className={styles.content}>
              <h2>Kindness</h2>{' '}
              <Button className={styles.btn} variant="light">
                I want it!
              </Button>
            </div>
            <img src=".\images\carousel\kindness.jpg" alt="Second slide"></img>
          </div>
        </div>
      </Col>
      <Row className={'col-3 '}>
        <div className={styles.information}>
          <div className={'col-12'}>
            <h2>What do you need?</h2>
            <p>
              Happiness? Smile? Kindness? Love? Not all days bring enough
              positive experiences.
            </p>
            <p>
              Here, in Goodness Shop, you can find whatever you need - stories
              about things you need to thirive.
            </p>
            <p>
              Just order what you need and wait for an e-mail with your order!
            </p>
            <h2>How it works?</h2>
            <p>
              You have 30 coins. Each represent one minute. Every story cost the
              amount of time you spend on reading it.
            </p>
          </div>
        </div>
      </Row>
    </Row>
  );
};

export default InformationBox;
