import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import axios from "axios";

const RequireAuth = async () => {
  const auth = useContext(AuthContext);
  const [checkingAuthStatus, setCheckingAuthStatus] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);
//checks if the user is logged in
//if the page is refreshed. then the user will be stayed logged in.
  const checkAuthStatus = async () => {
    if (auth.authenticated || !localStorage.getItem("access-token")) {
      setCheckingAuthStatus(false);
      console.log("testing 1");
      return;
    }

    try {
      const res = await axios.get("/api/auth/validate_token");
      auth.setUser(res.data.data);
      console.log("is it authenticated? testing 2");
    } catch (err) {
      console.log("token not valid. testing 3");
    } finally {
      setCheckingAuthStatus(false);
    }
  };

  if (checkingAuthStatus) {
    return(<><p> Checking if logged in or not</p></>);
  }

  if (!auth.authenticated) {
    return <Navigate to="/login" />;
  }

  return;
  <div className="App">
    <h1> User:{auth.email} is authenticated.</h1>
  </div>;
};

export default RequireAuth;
