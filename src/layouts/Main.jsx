import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Row, Container } from 'react-bootstrap';
import RightSideBar from '../pages/Shared/RightSideBar/RightSideBar';
import LeftSideBar from '../pages/Shared/LeftSideBar/LeftSideBar';
// import Category from '../pages/Home/Category/Category';
import { Outlet } from 'react-router-dom';


const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}><LeftSideBar></LeftSideBar></Col>
          <Col lg={6}> <Outlet></Outlet></Col>
          <Col lg={3}><RightSideBar></RightSideBar></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;