



import React from 'react'

import {womanData} from '../data/woman'


const Women = () => {

const firstFiveImages = womanData.slice(0,5)

  return (
<>
<h1 className=''>Womens Fashion</h1>

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

export default Women