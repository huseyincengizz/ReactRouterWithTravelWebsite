import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import Footer from './Footer'

function Register() {
  return (
    <>
   <Navbar/>
  <div className='register'>
  <div className='registered'>
    <h2>Üye Ol</h2>
    <input type="text" placeholder='Ad Soyad' />
    <input type="email" placeholder='E-mail'/>
    <input type="password" placeholder='Şifre'/>
    <input type="password" placeholder='Şifre Tekrar'/>
    <Link className='registerButton'>Üye Ol</Link>
   </div>
  </div>
  <Footer />
   </>
  )
}

export default Register