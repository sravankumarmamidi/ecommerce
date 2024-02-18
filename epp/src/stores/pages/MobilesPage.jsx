

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'

const MobilesPage = () => {

const  [selectedProduct,setSelectedproduct] = useState([])

const companyHandler= (mango)=>{
    if (selectedProduct.includes(mango)){
        setSelectedproduct(selectedProduct.filter(item => item !== mango))
    }
    else {
            setSelectedproduct([...selectedProduct,mango])
        }
    }

    const filteredProduct = selectedProduct.length === 0?
    mobileData : mobileData.filter((orange)=>selectedProduct.includes(orange.company))


  return (
    <>
    <Navbar />

    <div className="full-page">

    <div className="pro-selected">
         
         {mobileData.map((phone)=>{
            return(
                <div>
                    <label>
                        <input type = "checkbox" 
                               checked = {selectedProduct.includes(phone.company)} 
                               onChange ={()=>companyHandler(phone.company)}
                        
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

                           <Link to = {`/mobiles/${item.id}`}> 
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

export default MobilesPage