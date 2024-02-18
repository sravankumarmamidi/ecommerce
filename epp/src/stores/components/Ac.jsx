



import React from 'react'

import {acData} from '../data/ac'


const Ac = () => {

const firstFiveImages = acData.slice(0,5)

  return (
<>
<h1 className=''>Air Conditioner</h1>

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

export default Ac

