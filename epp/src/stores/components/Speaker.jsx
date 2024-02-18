



import React from 'react'

import {speakerData} from '../data/speaker'


const Speaker = () => {

const firstFiveImages = speakerData.slice(0,5)

  return (
<>
<h1 className=''>Speaker</h1>

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

export default Speaker