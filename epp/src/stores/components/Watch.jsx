


import React from 'react'

import {watchData} from '../data/watch'


const Watch = () => {

const firstFiveImages = watchData.slice(0,5)

  return (
<>
<h1 className=''>Watches</h1>

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

export default Watch

