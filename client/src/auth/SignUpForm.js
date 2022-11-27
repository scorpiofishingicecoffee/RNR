import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpForm({ onLogin }) {
  const navigate = useNavigate();
  const { handleRegister } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const notify = () => toast("You've successfully registered!🔒 🔓 🔏 🔐 🔑 🗝");

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      alert("Password does not match");
      return;
    }
    handleRegister({ email, password }, navigate);
    let item = { email, password, passwordConfirmation };
    console.warn(item);
  }

  return (
    <div className="Signup">
      <form onSubmit={handleSubmit} className="form">
        <h1>Sign Up Form</h1>
        <label className="label">Email</label>
        <br />
        <input
          className="field"
          placeholder="TYPE YOUR EMAIL HERE"
          type="email"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label className="label">Password</label>
        <br />
        <input
          className="field"
          placeholder="TYPE YOUR PASSWORD HERE"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <br />
        <label className="label">Confirm Password</label>
        <br />
        <input
          className="field"
          placeholder="RE-TYPE YOUR PASSWORD HERE"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <br />
        <button
          className="cybr-btn"
          type="submit"
          onClick={handleSubmit}
          onClick={notify}
        >
          Sign<span aria-hidden> Up</span>
          <span aria-hidden className="cybr-btn__glitch">
            Sign Up Sign Up Sign Up
          </span>
        </button>
        <br />
        <br />
        <button className="cybr-btn" onClick={() => navigate("/")}>
          Cancel<span aria-hidden> To go back</span>
          <span aria-hidden className="cybr-btn__glitch">
            Cancel Cancel Cancel
          </span>
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
