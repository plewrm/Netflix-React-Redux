import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
import Plewrm_Logo from "../Assets/Final_Plewrm.webp"
const LoginScreen = () => {
  
  const [signIn, setSignIn] = useState(false)
  return (
    <>
      <div className="loginScreen">
        <div className="loginScreen__background">
          <img
            onClick={() => setSignIn(false)}
            className="loginScreen__logo"
            src={Plewrm_Logo}
            // src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
            alt=""
          />

          <button className="loginScreen__button" onClick={() => setSignIn(true)}>Sign In</button>
          <div className="loginScreen__gradient" />
        </div>
        <div className="loginScreen__body">
          {
            signIn ? (
              <SignUpScreen />
            ) : (
              <>
                <h1>Unlimited films, TV series and more.</h1>
                <h2>Watch anywhere. Cancel at any time</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                <div className="loginScreen__input">
                  <form>
                    <input type="email" placeholder="Email Address" />
                    <button className="loginScreen__getStarted" onClick={() => setSignIn(true)}>GET STARTED</button>

                  </form>
                </div>
              </>
            )

          }

        </div>
      </div>
    </>
  );
};

export default LoginScreen;
