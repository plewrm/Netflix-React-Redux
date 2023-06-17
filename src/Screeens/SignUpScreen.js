import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";
// import { Link, useNavigate } from 'react-router-dom'
// import  {useHistory}  from 'react-router-dom';

const SignUpScreen = () => {
  // const navigator = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // const history = useHistory();
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
        // navigate("/")
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
      // history.push('/');
    // navigator("/")


  };
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

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
