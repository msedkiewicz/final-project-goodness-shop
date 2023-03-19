import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, getUserByLogin } from '../../../redux/userRedux';
import styles from './Register.module.scss';

const Register = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);
  const dispatch = useDispatch();
  const userCheck = useSelector((state) => getUserByLogin(state, login));
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { login, password };
    if (login.length < 6 || password.length < 6) {
      setStatus('loginWalidation');
      return;
    } else if (userCheck) {
      setStatus('loginError');
      return;
    }
    dispatch(addUser(data));
    setStatus('success');
    setTimeout(() => {
      navigate('/loginUser');
    }, 3000);
  };

  return (
    <Container className={styles.container}>
      <Form
        className="col-12 col-sm-3 mx-auto my-5 pb-5"
        onSubmit={handleSubmit}
      >
        <h1>Register</h1>
        {status === 'success' && (
          <Alert variant="success">
            <Alert.Heading>Success!</Alert.Heading>
            <p>You have been successfully registered! You can now log in...</p>
          </Alert>
        )}

        {status === 'serverError' && (
          <Alert variant="danger">
            <Alert.Heading>Something went wrong...</Alert.Heading>
            <p>Unexpected error.. Please try again!</p>
          </Alert>
        )}
        {status === 'loginError' && (
          <Alert variant="warning">
            <Alert.Heading>Login already in use</Alert.Heading>
            <p>You have to use other login.</p>
          </Alert>
        )}
        {status === 'loginWalidation' && (
          <Alert variant="warning">
            <Alert.Heading>Login or password i to short</Alert.Heading>
            <p>You must use at least 6 characters</p>
          </Alert>
        )}

        {status === 'loading' && (
          <Spinner animation="border" role="status" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
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
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
