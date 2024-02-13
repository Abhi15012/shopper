import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import './Popular.css'
function Popular() {
  return (
    <div className='popular'>
        <h1>POPUALR IN WOMEN</h1><hr />
        <div className="popular-item">
            {data_product.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular