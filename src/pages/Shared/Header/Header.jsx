import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { authContext } from '../../../provider/AuthProvider';

const Header = () => {
  const { user } = useContext(authContext)
  return (
    <Container>
      <div className='text-center '>
        <p>I am {user.displayName}</p>
        <img className="mx-auto" src={logo} />
        <b className="p-1">Journalism Without Fear or Favour</b>
        <p>{moment().format('dddd, MMMM Do YYYY')}</p>
      </div>
      <div className='d-flex align-items-center p-2 bg-secondary'>
        <Button variant='danger'>Latest</Button>
        <Marquee speed={100}>
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>

      <Navbar className='my-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features"><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Carrier</Nav.Link>
            </Nav>
            <Nav className='d-flex gap-3'>
              <Button> <Nav.Link href="#deets">{user.displayName}</Nav.Link></Button>
              <Link to="/signIn"> <Nav.Link href="#deets">login</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;