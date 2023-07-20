import React, { useEffect } from "react";
// import { Counter } from './features/counter/Counter';
import HomeScreen from "./Screeens/HomeScreen";
import LoginScreen from "./Screeens/LoginScreen";
import Body from "./component/Body";
import ProfileScreen from "./Screeens/ProfileScreen";
import "./App.css";
import { auth } from "./api/firebase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const user={
  //   name:'pawan'
  // };
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  // https://www.youtube.com/watch?v=KGkiIBTq0y0&ab_channel=ThapaTechnical
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
        // console.log(userAuth);
      } else {
        dispatch(logout())
        // console.log("Logged out");
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="">
      {!user ? (
        <>
        <LoginScreen />
        {/* <Body/> */}
        </>
        
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />

          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
