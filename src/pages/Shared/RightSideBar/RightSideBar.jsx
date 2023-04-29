import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from './Qzone';

const RightSideBar = () => {
  return (
    <div className='p-2'>
      <h2> right side bar </h2>
      <Button className='w-100 d-flex' variant="outline-secondary"><FaGoogle />login with google</Button>{' '}
      <Button className='my-2 w-100 d-flex' variant="outline-danger"><FaGithub />login with github</Button>{' '}

      <div className="">
        <h3>Find us </h3>
        <ul className="list-group">
          <li className="list-group-item d-flex align-items-center"><FaFacebook />Facebook</li>
          <li className="list-group-item d-flex align-items-center"><FaTwitter />Twitter</li>
          <li className="list-group-item d-flex align-items-center"><FaInstagram />Instagram</li>
        </ul>
      </div>
      <Qzone></Qzone>
    </div>


  );
};

export default RightSideBar;