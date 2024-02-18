


import React, { useState } from 'react'

import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const AcPage = () => {

    const [selectedProducts,setSelectedProducts] = useState([])

    const companyHandler= (mango)=>{
        if(selectedProducts.includes(mango)){
            setSelectedProducts(selectedProducts.filter(item=>item !== mango))
        } else {
            setSelectedProducts([...selectedProducts,mango])
        }
    }

    const filteredProduct = selectedProducts.length === 0?
    acData : acData.filter((orange)=>selectedProducts.includes(orange.company))

  return (
    <>
    <Navbar />
    <div className='full-page'>
    <div className="selected-products">
        {acData.map((phone)=>{
            return(
                <div className='pro-input'>
            <label>
                <input type = "checkbox"
                
                checked = {selectedProducts.includes(phone.company)}

                onClick = {()=>companyHandler(phone.company)}

                />
                {phone.company}
                
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
                        <Link to = {`/ac/${item.id}`}>
                    <div className='image-page'>
                        <img src={item.image} alt="" />
                    </div>
                       </Link>
                    <div>
                        {item.company}, {item.model}
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

export default AcPage


