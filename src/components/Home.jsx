import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <div className='home'>
    <p className='reactur'>REACTUR</p>
    <p className='travel'>TRAVEL</p>
    </div>
    <Footer />
    </>
  )
}

export default Home