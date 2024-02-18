


import React from 'react'

import {tvData} from '../data/tv'


const Tv = () => {

const firstFiveImages = tvData.slice(0,5)

  return (
<>
<h1 className=''>Television</h1>

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

export default Tv

