


import React from 'react'

import {menData} from '../data/men'


const Men = () => {

const firstFiveImages = menData.slice(0,5)

  return (
<>
<h1 className=''>Men Fashion</h1>

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

export default Men