import React from 'react'
import Product from './products/product'
import "./order-detail.css"
import logo from "../banner/logo.png"
import Icon from "./Icon.png"

function OrderDetail() {
  return (
    <div className='orderDetail'>
      <div className='orderInfo'>
        <div>
          <h2 id='bas'> <b><b>Order</b></b> <i> details </i></h2>
        </div>
        <div>
         claim at <img id='logo' src={logo} alt="logo"/>
        </div>
      </div>

    <div className='orderNote'> 
      <div>
        <p id='conNot'>Congrulations! You have NFT now :) <br/> <small>Sosyal medyada paylaşmak için NFTleri seçebilir ve link oluşturabilirsiniz.</small> </p>
      </div>
      <div id='linkDiv'> 
        <a id="creLink" href='/'><img id='icon' src={Icon} alt="icon"/> <small>Create & link and share</small></a>
      </div>
    </div>
      <Product 
      pText="SUMMER BOMBER BAG"
      image="https://resmim.net/cdn/2022/11/10/VADxh.png"/>
      <Product 
      pText="SUMMER BOMBER BAG"
      image="https://resmim.net/cdn/2022/11/10/VAm8W.png"/>
    </div>
  )
}

export default OrderDetail
