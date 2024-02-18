



import React from 'react'

import {booksData} from '../data/books'


const Books = () => {

const firstFiveImages = booksData.slice(0,5)

  return (
<>
<h1 className=''>Books</h1>

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

export default Books