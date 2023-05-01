import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthProvider, { authContext } from '../../provider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(authContext)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        console.log(result.user)
        form.reset()
      })
      .catch(err => {
        console.log(err.message)
      })

  }
  return (
    <div className='w-50 mx-auto p-4'>
      <h3> Regiester </h3>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control required name='name' type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required name='email' type="email" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control required name="confirm_password" type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
      <div className="div">allready registered? <Link to='/signIn' >please sign in </Link></div>
    </div>

  );
};

export default Register;