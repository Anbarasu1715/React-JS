import React from 'react'
import './Offers.css'
import elx_img from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='Offer'>
        <div className="Offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best Seller Products</p>
            <button>Check Now</button>
        </div>
        <div className="Offer-right">
            <img src={elx_img} alt="Exclusive" />
        </div>
    </div>
  )
}

export default Offers