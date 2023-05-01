import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { logdInUser } = useContext(authContext)
  const location = useLocation()
  console.log(location)

  if (logdInUser) {
    return children;
  }
  return <Navigate state={{ from: location }} to='/signIn' replace ></Navigate>
};

export default PrivateRoute;