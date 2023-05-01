import React, { createContext } from 'react';

export const authContext = createContext(null)

//
const AuthProvider = ({ children }) => {
  const user = { displayName: 'mahmudul hasan' }
  const authInfo = { user }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;