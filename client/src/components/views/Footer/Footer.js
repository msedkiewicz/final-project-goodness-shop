import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row className={styles.row}>
          <Col className={'col-md-6 col-xs-12 ' + styles.media}>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className={styles.twitter}
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className={styles.facebook}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className={styles.instagram}
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer"
              className={styles.pinterest}
            >
              <FaPinterestP />
            </a>
          </Col><Col className={'col-md-6 col-xs-12'}>
            <div className={styles.logofooter}>
              <button href="/">&copy; Goodness Shop, 2023</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;