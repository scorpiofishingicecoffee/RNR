import React from "react";
import axios from "axios";
import { useState } from "react";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = () => {
  const { user, setUser } = useState(null);
  const handleRegister = async () => {
    console.log("Register");
  };
  const handleLogin = async () => {
    console.log("Login");
  };
  const handleLogout = async () => {
    console.log("Logout");
  };

  return <AuthContext.Provider></AuthContext.Provider>;
};
