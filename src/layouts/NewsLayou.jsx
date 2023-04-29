import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import RightSideBar from '../pages/Shared/RightSideBar/RightSideBar';

import { Outlet } from 'react-router-dom';


const NewsLayou = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}> <Outlet></Outlet></Col>
          <Col lg={3}><RightSideBar></RightSideBar></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayou;