
import React,{useState} from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const BooksPage = () => {

    const [selectedProducts,setSelectedProducts] = useState([])

    const companyHandler = (mango)=>{
        if(selectedProducts.includes(mango)){
            setSelectedProducts(selectedProducts.filter(item=>item !== mango))
        } else {
            setSelectedProducts([...selectedProducts,mango])
        }
    }

    const filteredProduct = selectedProducts.length === 0?
    booksData : booksData.filter((orange)=>selectedProducts.includes(orange.title))

  return (
    <>
    <Navbar />

    <div className='full-page'>

    <div className="selected-products">
        {booksData.map((phone)=>{

            return(

                <div className="pro-input">
                    <label>
                        <input type = "checkbox"
                        checked = {selectedProducts.includes(phone.title)}

                        onClick = {()=>companyHandler(phone.title)}

                        />
                        {phone.title}
                       
                    </label>
                </div>
            )
        })}
    </div>

    <div className='product-page'>

        {filteredProduct.map((item)=>{
                return(
                    <div>
                        <Link to = {`/books/${item.id}`}>
                    <div className='image-page'>
                        <img src={item.image} alt="" />
                    </div>
                    </Link>

                    <div>
                        {item.author}, {item.title}
                    </div>
                    </div>
                )
            })
        }
    </div>
    </div>
    </>
  )
}

export default BooksPage