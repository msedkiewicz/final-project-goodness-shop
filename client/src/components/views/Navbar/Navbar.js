import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BsCart, BsSearch } from 'react-icons/bs';

const NavBar = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || [],
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || [],
  );

  useEffect(() => {
    if (cart.length !== 0) {
      setCart(JSON.parse(localStorage.getItem('cart')));
      getLength();
    }
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [cart]);

  function getLength() {
    let total = 0;
    cart.forEach((item) => {
      total = total + 1;
    });

    return total;
  }

  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">
        <div className={styles.logoheader}>
            <button href="/">Goodness Shop</button>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="p-4 justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Row className="justify-content-end">
            <Col className="col-6">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className={'me-2 '}
                />
                <Button className={styles.bnt} variant="outline-secondary">
                  <BsSearch />
                </Button>
              </Form>
            </Col>
            <Col className="col-1">
              <Link
                to="/cart"
                className={'d-flex align-items-center justify-content-around '}
              >
                <Button className={styles.bnt} variant="outline-secondary">
                  <BsCart />
                </Button>
              </Link>
            </Col>
            <Col className={'col-2'}>
              <p
                className={
                  'd-flex align-items-center justify-content-center m-0 ' +
                  styles.cartLenght
                }
              >
                {getLength() || null }
              </p>
            </Col>
            <Col className="col-3">
              <Nav>
                {user ? (
                  <NavDropdown title={`Hi ${user.login}`}>
                    <NavDropdown.Item href="/logout">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown title={'User Panel'}>
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register">
                      Register
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;