import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import newyork from '../assets/newYork.jpg'
import giza from '../assets/giza.jpg'
import tokyo from '../assets/tokyo.jpg'
import prag from '../assets/prag.jpg'
import rio from '../assets/rio.jpg'
import rome from '../assets/rome.jpg'
import paris from '../assets/paris.jpg'
import Footer from './Footer'


function Abroad() {
  return (
    <>
    <Navbar />
    <div className="cards">
    <div className="card">
        <Cards 
        url={newyork}
        heading="New York"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        <div className="card">
        <Cards 
        url={giza}
        heading="Giza"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        <div className="card">
        <Cards 
        url={tokyo}
        heading="Tokyo"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        <div className="card">
        <Cards 
        url={prag}
        heading="Prag"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        <div className="card">
        <Cards 
        url={rio}
        heading="Rio"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        <div className="card">
        <Cards 
        url={rome}
        heading="Rome"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        <div className="card">
        <Cards 
        url={paris}
        heading="Paris"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        </div>
        <Footer />
    </>
  )
}

export default Abroad

