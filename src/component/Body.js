import React from 'react'
// import HomePage from './HomePage.js/HomePage'
import BodyImage from './BodyImage'
import BodyVideo from './BodyVideo'
import {fitstimagerow, secondimagerow, firstvideorow, secondvideorow} from "./Helpers"
// import Freequently from './Freequentlydiv/Freequently'
// import Footer from './Footer/Footer'

const Body = () => {
  return (
    <div>
        {/* <HomePage/> */}
        <BodyVideo {...firstvideorow}/>
        <BodyImage {...fitstimagerow}/>
        <BodyVideo {...secondvideorow}/>
        <BodyImage {...secondimagerow}/>
        {/* <Freequently/>
        <Footer/> */}
    </div>
  )
}

export default Body