import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
  const [catagores, setCatagories] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/catagories')
      .then(res => res.json())
      .then(data => setCatagories(data))
  }, [])
  return (
    <div>
      <h2> All category </h2>
      <hr />
      <div className="ps-3">
        {
          catagores.map(category => <Link to={`/category/${category.id}`} className='text-decoration-none text-black' key={category.id}><p>{category.name}</p></Link>)
        }
      </div>

    </div>
  );
};

export default LeftSideBar;