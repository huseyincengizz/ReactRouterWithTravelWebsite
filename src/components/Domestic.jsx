import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import nemrut from '../assets/nemrut.jpg'
import fethiye from '../assets/fethiye.jpg'
import aspendos from '../assets/aspendos.jpg'
import efes from '../assets/efes.jpg'
import pamukkale from '../assets/pamukkale.jpg'
import kapadokya from '../assets/kapadokya.jpg'
import saklikent from '../assets/saklikent.jpg'
import Footer from './Footer'

function Domestic() {
  return (
    <>
    <Navbar />
    <div className="cards">
    <div className="card">
        <Cards 
        url={nemrut}
        heading="Nemrut Dağı"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        <div className="card">
        <Cards 
        url={fethiye}
        heading="Fethiye Ölüdeniz"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        <div className="card">
        <Cards 
        url={aspendos}
        heading="Aspendos"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        <div className="card">
        <Cards 
        url={efes}
        heading="Efes Antik Kenti"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        <div className="card">
        <Cards 
        url={pamukkale}
        heading="Pamukkale Travertenleri"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        <div className="card">
        <Cards 
        url={kapadokya}
        heading="Kapadokya"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        <div className="card">
        <Cards 
        url={saklikent}
        heading="Antalya Saklıkent"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut cumque omnis, ipsa similique quisquam nulla! Reiciendis hic est ea sit molestias natus. Magni facilis perferendis, sit pariatur atque ipsum exercitationem eum. Error dolores magni autem est delectus tempore recusandae sint architecto non. Facere, minima!"
        />
        </div>
        </div>
        <Footer />
    </>
  )
}

export default Domestic