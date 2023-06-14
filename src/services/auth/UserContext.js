import React, { useState, useEffect, createContext } from "react";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../api_calls"; // lo tengo

import LogIn from "../../scenes/login"; // tambien lo tengo
import Bienvenido from "../../scenes/bienvenido"; // tambien lo tengo

import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = async () => {
      let cuser = isAuthenticated();
      if (cuser === null) {
        localStorage.setItem("user", "");
        cuser = "";
      }

      setCurrentUser(cuser);
    };

    checkLoggedIn();
  }, []);

  console.log("userContext_from_auth", currentUser);

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {currentUser && (currentUser.hash ? children : <LogIn />)}
    </UserContext.Provider>
  );
};

export default UserContext;
