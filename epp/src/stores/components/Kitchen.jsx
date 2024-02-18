



import React from 'react'

import {kitchenData} from '../data/kitchen'


const Kitchen = () => {

const firstFiveImages = kitchenData.slice(0,5)

  return (
<>
<h1 className=''>Kitchen</h1>

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

export default Kitchen