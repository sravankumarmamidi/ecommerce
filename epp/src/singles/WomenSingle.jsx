

import React from 'react'
import { useParams } from 'react-router-dom'
import { womanData } from '../stores/data/woman'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartContext'

const WomenSingle = () => {
    const {addToCart} = useCart()

    const {id} = useParams()
    const product = womanData.find((item)=> item.id === id)

  return (
    <>

    <Navbar />
  
  
      <div className="ind-section">
          <div className="ind-image">
              <img src={product.image} alt="" />
          </div>
          <div className="ind-details space">
              <div className="ind-company">
                  <h1>{product.company}</h1>
              </div>
          <div className="ind-model space">
              <h2>{product.model}</h2>
          </div>
          <div className="ind-price space">
              <h3>{product.price}</h3>
          </div>
  
          <div className="ind-desc space">
              <p>{product.description}</p>
          </div>
      <button onClick={()=>addToCart(product)}>Add to Cart</button>
      </div>
      </div>
      </>
  )
}

export default WomenSingle