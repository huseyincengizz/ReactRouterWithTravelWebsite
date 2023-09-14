import React from 'react'
import Navbar from './Navbar'
import Call from '../assets/call.jpg'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Contact() {
  return (
   <>
   <Navbar/>
   <div className='contact'>
    <div>
    <img src={Call} alt="İletişim Sayfası Telefon Resmi" width={"480px"} height={"540px"} />
    </div>
    <div>
      <h2>İletişim Formu</h2>
      <form>
        <input type="text" placeholder='Ad Soyad' />
        <input type="email" placeholder='E-Mail Adresi'  />
        <input type="tel" placeholder='Telefon Numarası' />
        <textarea cols="30" rows="10" placeholder='Mesajınız'></textarea>
        <Link className='send'>Gönder</Link>
      </form>
    </div>
   </div>
   <Footer />
   </>
  )
}

export default Contact