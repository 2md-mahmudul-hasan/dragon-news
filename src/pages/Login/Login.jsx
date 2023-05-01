import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../provider/AuthProvider';

const Login = () => {
  const { signIn } = useContext(authContext)
  const navigate = useNavigate()
  const handleSignIn = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('log in')
    signIn(email, password)
      .then(res => {
        console.log(res.user)
        navigate('/category/0')
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  return (
    <div className='w-50 mx-auto p-4'>
      <h3> Your log in here </h3>
      <Form onSubmit={handleSignIn} >
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