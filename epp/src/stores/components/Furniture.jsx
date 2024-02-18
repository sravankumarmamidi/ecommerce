


import React from 'react'

import {furnitureData} from '../data/furniture'


const Furniture = () => {

const firstFiveImages = furnitureData.slice(0,5)

  return (
<>
<h1 className=''>Mobiles</h1>

    <div className='pro-section'>
        {
            firstFiveImages.map((item) =>{
                return (
                    <div className='image-box'>
                        <img  className='pro-image'  src={item.image} alt="" />
                    </div>
                )

            })
        }
    </div>
    </>
  )
}

export default Furniture