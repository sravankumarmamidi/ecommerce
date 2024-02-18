

import React from 'react'

import { useCart } from './context/CartContext'

const UserCart = () => {

    const {cartItems} = useCart()

  return (
    <div>
        {cartItems.map((item)=>{
            return(
                <div className="cart-section">
                    <div className="cart-image">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="cart-details">
                        <h1>{item.product}</h1>
                        <h2>{item.price}</h2>
                        <h3>{item.model}</h3>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default UserCart