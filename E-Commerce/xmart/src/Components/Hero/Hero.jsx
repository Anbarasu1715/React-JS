import React from 'react'
import './Hero.css'
import handIcon from '../Assets/hand_icon.png'
import arrowIcon from '../Assets/arrow.png'
import heroImg from '../Assets/ronaldo-Xmart.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrival Only</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={handIcon} alt="Hand" />
                </div>
                <p>Collection</p>
                <p>for EveryOne</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrowIcon} alt="Arrow" />
            </div>
        </div>
        <div className='hero-right'>
            <img src={heroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero