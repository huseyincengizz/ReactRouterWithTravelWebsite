import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Signin() {
  return (
    <>
   <Navbar/>
  <div className='sign'>
  <div className='signin'>
    <h2>Giriş Yap</h2>
    <input type="text" placeholder='E-Mail' />
    <input type="password" placeholder='Şifre'/>
    <Link className='signButton'>Giriş Yap</Link>
   </div>
  </div>
  <Footer/>
   </>
  )
}

export default Signin