import React from 'react'
import './ProfileScreen.css'
import Nav from '../Partials/Nav'
import {auth} from '../api/firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
function ProfileScreen() {
  const user = useSelector(selectUser)
  const navigate  = useNavigate();

  return (
    <div className='profileScreen'>
      <Nav />
      <div className="profileScreen__body">
        <h1> <Link style={{color:'white'}} to="/"><FontAwesomeIcon icon={faArrowLeftLong} /></Link> &nbsp;&nbsp;&nbsp;Profile and more</h1>
        <div className="profileScreen__info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button 
              className='profileScreen__signout'
              onClick={()=> {auth.signOut(); navigate("/")}}>Sign Out</button>
              <button 
              className='profileScreen__signout_Cancel'
              onClick={()=> navigate("/")}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
      {/* <h2>Edit</h2> */}


    </div>
  )
}

export default ProfileScreen
