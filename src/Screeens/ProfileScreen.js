import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import {auth} from '../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
function ProfileScreen() {
  const user = useSelector(selectUser)
  return (
    <div className='profileScreen'>
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
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
              onClick={()=> auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>


      <h2>Edit</h2>
    </div>
  )
}

export default ProfileScreen
