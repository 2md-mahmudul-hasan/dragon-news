import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const authContext = createContext(null)

const auth = getAuth(app);

//
const AuthProvider = ({ children }) => {
  const [logdInUser, setUser] = useState(null)
  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  //monitor user befor private route
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (logdInUser) => {
      setUser(logdInUser)
    })
    return () => {
      unsubscribe();
    }
  }, [])

  const logOut = () => {
    return signOut(auth)
  }
  const authInfo = { logdInUser, createUser, signIn, logOut }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;