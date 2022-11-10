import React from 'react'
import pdol from "./pdol.png"
import pbos from "./pbos.png"
import opensea from "./Opensea.png"
import arrow from "./arrow.png"
import Modal from 'react-bootstrap/Modal';
import "./product.css"
import { useState } from 'react'
import Popup from './popup/popup'


function Product(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <div>
    <div className="card mb-3 p-2" style={{maxwidth: "540px"}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={props.image} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
        <div id='topText'>
          <p style={{display:"inline-block"}} className="card-title"> <small><small><b>{props.pText}</b></small> </small></p>
          <p style={{display:"inline-block"}} className="card-text"><small><small>You got this NFT at August 20th 2022, 07:12:55pm</small> </small></p>
        </div>
        <div id='btnShr'><button onClick={handleShow}  id='buton' className='btn btn-primary text-white'> Share </button></div>
        <div> <div id='subText'>
          <p style={{display:"inline-block"}} className="card-title"> 
          <img alt='pdol' id='pdol' src={pdol}/>
          <img alt='pbos' id='pbos' src={pbos}/>
          <small><small><small>Mint status: ON BLOCKCHAIN </small></small></small></p>
          <div> <img id='opensea' alt='opensea' src={opensea}/><img id='arrow' alt='arrow' src={arrow}/> </div>
        </div></div>

        
        
        </div>
      </div>
    </div>
  </div>
    
       <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose} animation={false}>
       <Modal.Header closeButton>
         <div> <small id='stnft'>Share this NFT</small> </div>
        </Modal.Header>
        <Modal.Body><Popup/></Modal.Body>
       
        </Modal> 
  </div>
  
  
  )
}


export default Product
