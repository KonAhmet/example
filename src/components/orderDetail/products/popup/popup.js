import React from 'react'
import "./popup.css"
import tw from "../tw.png"

function Popup() {
  return (
    <div>
      <div id="cardPop" className="card" style={{width: "20rem"}}>
  <img src="https://imgyukle.com/f/2022/11/10/JJn38j.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <div className="card-title">
      <p><i>#tag</i></p>
      <p className='clrtext'>#summer</p>
      <p className='clrtext'>#bag</p>
    </div>
    <div className="linkAnyDiv"><a href="mylist.pixurate.com/userloyal/...." className="linkAny">mylist.pixurate.com/userloyal/bag&shoe</a></div>
<div className='linkAnyDiv'><a href='/'><img src={tw}alt='tw' /></a></div>
<div className='linkAnyDivs'><a href='/'>Add more NFT to share</a></div>
  
  </div>
</div>
    </div>
  )
}

export default Popup
