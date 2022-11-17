import React from "react";
import { useEffect, useState } from "react";
import Games from "./Games";
import axios from "axios";
import NavBar from "./NavBar";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import NavBarPage from "./NavBarPage";
import HomePage from "./HomePage";
import Protected from "./Protected";
import RequireAuth from "./RequireAuth";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import {useNavigate, Navigate} from "react";
import Particles from "react-tsparticles";
import PartitclesConfig from "./Particles-Config";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Par
      <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path={<RequireAuth />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/protected" element={<Protected />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;