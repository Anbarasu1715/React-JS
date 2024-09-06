import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png'
import cartIcon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu,setMenu]=useState("Shop");

    const menuClick=(e)=>
    {
        setMenu(e.target.innerText);
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo" />
                <p>XMart</p>
            </div>
            <div>
                <ul className='nav-menu'>
                    <li onClick={menuClick}><Link style={{textDecoration:'none' }} to='/'>Shop</Link> {(menu=='Shop')?<hr/>:<></>}</li>
                    <li onClick={menuClick}><Link style={{textDecoration:'none'}} to='/men'>Men</Link> {(menu=='Men')?<hr/>:<></>}</li>
                    <li onClick={menuClick}><Link style={{textDecoration:'none'}} to='/women'>Women</Link> {(menu=='Women')?<hr/>:<></>}</li>
                    <li onClick={menuClick}><Link style={{textDecoration:'none'}} to='kids'>Kids</Link> {(menu=='Kids')?<hr/>:<></>}</li>
                </ul>
            </div>
            <div className='nav-login'>
                <Link to='login'><button>Login</button></Link>
                <Link to='cart'><img src={cartIcon} alt="cart" /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    );
}

export default Navbar;