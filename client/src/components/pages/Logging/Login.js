import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { getUserByLogin } from '../../../redux/userRedux';
import shortid from 'shortid';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);
  const userCheck = useSelector((state) => getUserByLogin(state, login));
  console.log(userCheck);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.length < 6 || password < 6) {
      setStatus('dataError');
      return;
    } else if (!userCheck) {
      setStatus('clientError');
      return;
    } else if (userCheck.password !== password) {
      setStatus('clientError');
      return;
    }
    const data = { id: shortid(), login };

    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', '[]');
    }
    let user = JSON.parse(localStorage.getItem('user'));
    localStorage.setItem('user', JSON.stringify(data));
    setStatus('success');
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <Container className={styles.container}>
      <Form
        className="col-12 col-sm-3 mx-auto my-5 pb-5"
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>
        {status === 'dataError' && (
          <Alert variant="danger">
            <Alert.Heading>Error</Alert.Heading>
            <p>
              Login or password is too short. You must use at least 6 characters
            </p>
          </Alert>
        )}

        {status === 'clientError' && (
          <Alert variant="danger">
            <Alert.Heading>Error</Alert.Heading>
            <p>Login or password are incorrect.</p>
          </Alert>
        )}
        {status === 'loading' && (
          <Spinner animation="border" role="status" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {status === 'success' && (
          <Alert variant="success">
            <Alert.Heading>Success!</Alert.Heading>
            <p>You have been successfully logged in!</p>
          </Alert>
        )}
        <Form.Group>
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            required={true}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </Container>
  );
};

export default Login;