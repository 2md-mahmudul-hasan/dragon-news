import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='w-50 mx-auto p-4'>
      <h3> Your log in here </h3>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="div">not  registered? <Link to='/register' >please rigiester </Link></div>
    </div>
  );
};

export default Login;