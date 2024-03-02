// Login.js
import React, { useState } from "react";
import styles from "./style.module.css";
import { useAuth } from "../../context/authContext";
import {
  doSignInWithGoogle,
  doSignInWithEmailAndPassword,
} from "../../firebase/auth";
import { Link } from "react-router-dom";
import Home from "../home";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userLoggedIn, currentUser } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = () => {
    if (userLoggedIn) {
      navigate("/user/" + currentUser.uid);
    }
  };
  isLoggedIn();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(username, password);
      // doSendEmailVerification()
      console.log(username, password);
    }
  };
  const googleLogin = async (e) => {
    e.preventDefault();
    await doSignInWithGoogle();
  };

 

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form className={styles.loginForm}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <h4>OR</h4>
        <button type="button" onClick={googleLogin}>
          Sign Up with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
