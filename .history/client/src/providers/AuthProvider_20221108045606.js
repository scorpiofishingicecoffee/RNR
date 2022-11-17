import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

function AuthProvider(props) {
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [apidata, setApidata] = useState();


  const handleRegister = async (user, navigate) => {
    try {
      const response = await axios.post("api/auth", user);
      console.log("res:", user);
      setUser(response.data.data);
      alert("Registered");
      navigate("/protected");
    } catch (error) {
      console.log(error.response);
      alert("error occured");
    }
  };
  const handleLogin = async (user, navigate) => {
    try {
      const response = await axios.post("api/auth/sign_in", user);
      console.log("res:", user);
      setUser(response.data.data);
      alert("Logged in");
      navigate("/protected");
      const headers = response.headers;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "access_token"
)}`;
      axios.defaults.headers.common["token-type"] = headers["token-type"];
      axios.defaults.headers.common["client"] = headers["client"];
      axios.defaults.headers.common["expiry"] = headers["expiry"];
      axios.defaults.headers.common["uid"] = headers["uid"];
    } catch (err) {
      console.log(err.response);
      alert("error occured");
    }
  };

  const handleLogout = async (navigate) => {
    try {
      const response = await axios.delete("api/auth/sign_out");
      console.log(response.data.data);
      setUser(null);
      navigate("/");
    } catch (err) {
      console.log(err.response);
      alert("error occured");
    }
  };

  return (
    <ErrorBoundary>
      <AuthContext.Provider
        value={{
          ...user,
          handleRegister,
          handleLogin,
          handleLogout,
          setUser,
          authenticated: user !== null,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </ErrorBoundary>
  );
}

export default AuthProvider;
