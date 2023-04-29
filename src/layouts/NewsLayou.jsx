import RightSideBar from '../pages/Shared/RightSideBar/RightSideBar';

import { Outlet } from 'react-router-dom';


const NewsLayou = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={6}> <Outlet></Outlet></Col>
          <Col lg={3}><RightSideBar></RightSideBar></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayou;