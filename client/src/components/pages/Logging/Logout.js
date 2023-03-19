import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || 0,
  );
  const navigate = useNavigate();
  if (user) {
    setTimeout(() => {
      localStorage.removeItem('user');
      navigate('/');
    }, 3000);
  }

  return (
    <div>
      {user ? (
        <Container className="text-center my-5">
          <h2 className="my-5">Thanks for visiting our shop!</h2>
          <h4 className="my-5">Hope to see you soon!</h4>
        </Container>
      ) : (
        <Container className="text-center my-5">
          {' '}
          <h4 className="my-5">
            You are not logged, you should not be here!
          </h4>
        </Container>
      )}
    </div>
  );
};

export default Logout;