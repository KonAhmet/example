import React from 'react'
import "./Banner.css"
import logo from "./logo.png"
import Vector from "./Vector.png"


function Banner() {
  return (
    <div className='topBanner'>
      <img src={logo}  alt='logo' />
      <img src={Vector} className="Vector"  alt='Vector' />
      
    
    </div>
  )
}

export default Banner
