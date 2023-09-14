import React from 'react'
import { Link } from 'react-router-dom'
import ReactLogo from '../assets/reacTur.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Linkedin from '../assets/linkedin.png'

function Footer() {
  return (
    <>
    <div className="footer">
      <div className='footerLogo'>
      <Link to={"/"}><img src={ReactLogo} alt="React Logo"  />ReacTur</Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum placeat totam porro.</p>
      </div>
      <div>
      <Link><img src={Facebook} alt="Facebook Logo"  /></Link>
      <Link><img src={Instagram} alt="Instagram Logo"  /></Link>
      <Link><img src={Twitter} alt="Twitter Logo"  /></Link>
      <Link><img src={Linkedin} alt="Linkedin Logo"  /></Link>
      </div>
      <div>
      <input type="email" className='mail' />
      <Link className='abone'>Abone Ol</Link>
      </div>
    </div>
    </>
  )
}

export default Footer