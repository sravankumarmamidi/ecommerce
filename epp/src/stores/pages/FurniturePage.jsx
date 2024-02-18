

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const FurniturePage = () => {

    const [selectedProducts,setSelectedProducts] = useState([])

    const companyHandler = (mango)=>{
        if(selectedProducts.includes(mango)){
            setSelectedProducts(selectedProducts.filter(item=> item !== mango))
        } else {
            setSelectedProducts([...selectedProducts,mango])
        }
    }

    const filteredProduct = selectedProducts.length === 0?
    furnitureData : furnitureData.filter((orange)=>selectedProducts.includes(orange.brand))

    
  return (
    <>
    <Navbar />
    <div className="full-page">
    <div className="selected-products">
        {furnitureData.map((phone)=>{
            return(
                <div className="pro-input">
                    <label>
                        <input type = "checkbox" checked = {selectedProducts.includes(phone.brand)} 
                        onClick = {()=>companyHandler(phone.brand)}
                        />
                        {phone.brand}
                    </label>
                </div>
            )
        })}
    </div>
        <div className='product-page'>
            {
                filteredProduct.map((item)=>{
                    return(
                        <div>
                            <Link to = {`/furniture/${item.id}`}>
                        <div className='image-page'>
                            <img src={item.image} alt="" />
                        </div>
                        </Link>
                        <div>
                            {item.brand},{item.model}
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </>
  )
}

export default FurniturePage