import Link from 'next/link'
import React from 'react'
import { AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="logo" style={{
        display:'flex',
        alignItems:'center'
      }}>
        <Link href="/">boAt 2.0</Link>
        <input className='search' style={{
          borderRadius:'20px',
          border:'none',
          height:'30px',
          marginLeft:30,
          width:'200px'
        }}></input>
        <AiOutlineSearch/>
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
