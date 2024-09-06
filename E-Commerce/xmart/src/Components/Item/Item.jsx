import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='Item'>
        <div className="item-img">
            <img src={props.img} alt="Product" />
            <p>{props.name}</p>
            <div className="Item-prices">
                <div className="new-price">₹{props.newPrice}</div>
                <div className="old-price">₹{props.oldPrice}</div>
            </div>
        </div>
    </div>
  )
}

export default Item