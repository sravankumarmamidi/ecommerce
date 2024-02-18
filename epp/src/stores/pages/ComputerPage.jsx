
import React, { useState } from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ComputerPage = () => {

    const [selectedProducts,setSelectedProducts] = useState([])

    const companyHandler= (mango)=>{
        if(selectedProducts.includes(mango)){
            setSelectedProducts(selectedProducts.filter(item=> item !== mango))
        } else {
            setSelectedProducts([...selectedProducts,mango])
        }
    }

    const filteredProduct = selectedProducts.length ===0?
    computerData : computerData.filter((orange)=>selectedProducts.includes(orange.model))

    
  return (
    <>
    <Navbar />
    <div className="full-page"> 
    <div className="selected-products">
        {computerData.map((phone)=>{
            return(
                <div className='pro-input'>
                <label>
                    <input type = "checkbox"
                    checked = {selectedProducts.includes(phone.model)}
                    onClick = {()=>companyHandler(phone.model)}
                    />
                    {phone.model}
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
                        <Link to = {`/computer/${item.id}`}>
                    <div className='image-page'>
                        <img src={item.image} alt="" />
                    </div>
                    </Link>
                    <div>
                        {item.company},{item.model}
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

export default ComputerPage

