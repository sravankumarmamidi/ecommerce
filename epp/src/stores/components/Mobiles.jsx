
import React from 'react'

import {mobileData} from '../data/mobiles'


const Mobiles = () => {

const firstFiveImages = mobileData.slice(0,5)

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

export default Mobiles

