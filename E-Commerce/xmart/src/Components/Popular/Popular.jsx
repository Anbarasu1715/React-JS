import React from 'react'
import "./Popular.css"
import data_product from '../Assets/data'
import Item from '../Item/Item'

function Popular() {
    return (
        <div className='Popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item)=>{
                    return <Item
                        img={item.image}
                        name={item.name}
                        newPrice={item.new_price}
                        oldPrice={item.old_price}
                    />
                })}
            </div>
        </div>
    )
}

export default Popular