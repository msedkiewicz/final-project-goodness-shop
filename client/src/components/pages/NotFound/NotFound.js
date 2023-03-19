import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './NotFound.module.scss';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundEN = (props) => {
  return (
    <Container className={styles.notfoundcontainer}>
      <Row className={styles.notfoundrow}>
      <Col className="col-10">
        <h1 className={styles.h1notfound}>Oops! Nothing found!</h1>
        <p className={styles.notfound}>404</p>
        <p className={styles.pnotfound}>Such site does not exist.</p>
      </Col>
        <Button>
          <Link to="/">Return to Home Page</Link>
        </Button>
      </Row>
    </Container>
  );
};

export default NotFoundEN;
