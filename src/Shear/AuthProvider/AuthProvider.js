import React, { createContext } from "react";
import UseFirebase from "../Firebase/UseFirebase/UseFirebase";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const firebase = UseFirebase();
  return (
    <authContext.Provider value={firebase}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
