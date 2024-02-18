


import React from 'react'

import {computerData} from '../data/computers'


const Computers = () => {

const firstFiveImages = computerData.slice(0,5)

  return (
<>
<h1 className=''>Computers</h1>

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

export default Computers

