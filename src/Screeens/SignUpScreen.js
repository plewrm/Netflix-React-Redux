import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../api/firebase";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
const SignUpScreen = () => {
  // const navigate = useNavigate()

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // navigator("/")
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
   
  };



  return (
    <div className="signUpScreen">

      <form>
        <h1 >Sign In</h1>
        <input ref={emailRef} placeholder="Email or phone number" type="email" />
        <input ref={passwordRef} placeholder="password" type="password" />
        <button type="submit" onClick={signIn}>Sign In</button>

        <h4>
          <span style={{ color: "gray" }}>New to Netflix?</span>&nbsp;
          <span style={{ cursor: "pointer" }} onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
      
    </div>
  );
};

export default SignUpScreen;
