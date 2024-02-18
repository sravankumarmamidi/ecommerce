

import React from 'react'

import { Link } from 'react-router-dom'

import { useCart } from '../context/CartContext'

const Navbar = () => {

  const {cartItems} = useCart()

  return (
    
    <>
      <div className="navSection">
        <div className="title">
            <h1>E-Mart</h1>
        </div>

        <div className="search">
            <input  className = "" type = "text" placeholder='Search here ?' />
        </div>

        <div className="user">
            <div className="user-details">
                SignUp/SignUp
            </div>
            <Link to = "/cart">
            <div className="cart">Cart 
            
            <span>
              {cartItems.length}
            </span>

            </div>
            </Link>
            </div>
            </div>

       <div className="sub-menu">
        <ul>
            <Link to = "/acpage"><li>Ac</li></Link>
            <Link to = "/bookspage"><li>Books</li></Link>
            <Link to = "/computerpage"><li>Computers</li></Link>
            <Link to = "/fridgepage"><li>Fridge</li></Link>
            <Link to = "/furniturepage"><li>Furniture</li></Link>
            <Link to = "/kitchenpage"><li>Kitchen</li></Link>
            <Link to = "/menpage"><li>Men</li></Link>
            <Link to = "/mobilespage"><li>Mobiles</li></Link>
            <Link to = "/speakerpage"><li>Speaker</li></Link>
            <Link to = "/tvpage"><li>Tv</li></Link>
            <Link to = "/watchpage"><li>Watch</li></Link>
            <Link to = "/womenpage"><li>Women</li></Link>
        </ul>
       </div>
    </>
  )
}

export default Navbar