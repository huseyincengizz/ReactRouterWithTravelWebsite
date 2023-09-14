import React from 'react'
import ReactLogo from '../assets/reacTur.png'
import {NavLink, Link} from 'react-router-dom'

function Navbar() {
  return (
   <>
   <div className="navbar">
    <div className='logo'>
    <Link to={"/"}><img src={ReactLogo} alt="React Logo"  />ReacTur</Link>
    </div>
    <div className='menu'>
        <ul>
            <li>
                <NavLink to={"/"}>Anasayfa</NavLink>
            </li>
            <li>
                <NavLink to={"/domestic"}>Yurtiçi Seyahat</NavLink>
            </li>
            <li>
                <NavLink to={"/abroad"}>Yurtdışı Seyahat</NavLink>
            </li>
            <li>
                <NavLink to={"/contact"}>İletişim</NavLink>
            </li>
        </ul>
    </div>
    <div className='register'>
        <ul>
            <li>
                <NavLink to={"/signin"}>Giriş Yap</NavLink>
            </li>
            <li>
                <NavLink to={"/register"}>Üye Ol</NavLink>
            </li>
        </ul>
    </div>
   </div>
   </>
  )
}

export default Navbar