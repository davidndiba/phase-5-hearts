import React from 'react'
import Slider from '../User/Slider'
import Abouts from '../User/Abouts'
import Donations from '../User/Donations'
// import Reviews from '../Components/Review'
import Contact from '../User/Contact'
// import Map from '../Pages/Map'



const LandingPage = () => {
  return (
    <div>
      <Slider />
      <Abouts />
      <Donations />
      {/* <Reviews /> */}
      <Contact />
      {/* <Map/> */}
    </div>

  )
}

export default LandingPage