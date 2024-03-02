import React from "react";
import { useAuth } from "../../context/authContext";
import {
  doSignInWithGoogle,
  doCreateUserWithEmailAndPassword,
} from "../../firebase/auth";
import { useState } from "react";
import styles from "./style.module.css";
import Input from "../../components/input";
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
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

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      //   setIsSigningIn(true);
      await doCreateUserWithEmailAndPassword(username, password);
      // doSendEmailVerification()
      console.log(username, password);
    }
    console.log(userLoggedIn.email);
    navigate('/createProfile')
  };

  const googleSignUp = async (e) => {
    e.preventDefault();
    await doSignInWithGoogle();
  };

  return (
    <div className={styles.loginContainer}>
      {userLoggedIn && userLoggedIn.displayname}
      <h2>SignUp</h2>
      <form className={styles.loginForm}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={setUsername}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
         
        <button type="button" onClick={handleSignup}>
          SignUp
        </button>
        <h4>OR</h4>
        <button type="button" onClick={googleSignUp}>
          Sign Up with Google
        </button>
      </form>
    </div>
  );
};
export default SignUp;
