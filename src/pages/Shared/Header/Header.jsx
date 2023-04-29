import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
  return (
    <div>
      <div className='text-center '>
        <img className="mx-auto" src={logo} />
        <b className="p-1">Journalism Without Fear or Favour</b>
        <p>{moment().format('ddd, MMMM Do YYYY')}</p>
      </div>
    </div>
  );
};

export default Header;