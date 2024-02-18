


import React from 'react'

import {fridgeData} from '../data/fridge'


const Fridge = () => {

const firstFiveImages = fridgeData.slice(0,5)

  return (
<>
<h1 className=''>Fridge</h1>

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

export default Fridge