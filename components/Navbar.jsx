import Link from 'next/link'
import React from 'react'
import { AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';
import LogoutIcon from '@mui/icons-material/Logout';
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="logo" style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Link href="/">Go Noise</Link>
        {/* <input className='search' style={{
          borderRadius:'20px',
          border:'none',
          height:'30px',
          marginLeft:30,
          width:'200px'
        }}></input>
        <AiOutlineSearch/> */}
      </div>
      <div>
        <LogoutIcon onClick={() => {
          localStorage.removeItem("user")
          location.reload()
        }} sx={{color:'grey',cursor:'pointer',mr:1}} />
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

      </div>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
