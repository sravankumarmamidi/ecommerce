

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'


const FridgePage = () => {
    const [selectedProducts,setSelectedProducts]= useState([])

    const companyHandler = (mango)=>{
        if(selectedProducts.includes(mango)){
            setSelectedProducts(selectedProducts.filter(item=> item !== mango))
        } else {
            setSelectedProducts([...selectedProducts,mango])
        }

    }

    const filteredProduct = selectedProducts.length === 0?
    fridgeData : fridgeData.filter((orange)=>selectedProducts.includes(orange.brand))
  return (
    <>
    <Navbar />
    <div className="full-page">
    <div className="selected-products">
        {fridgeData.map((phone)=>{
            return(
                <div className="pro-input">
                    <label>
                        <input type = "checkbox"
                        checked = {selectedProducts.includes(phone.brand)}
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
                            <Link to = {`/fridge/${item.id}`}>
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

export default FridgePage