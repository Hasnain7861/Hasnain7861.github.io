import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/20211219_122505.jpg'
import HeaderSocials from '../header/HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hasnain Mucklai</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

      <div className="me">
       <img src= {ME} alt='A picture of me' />
       </div>

       <a href='#contact' className='scroll__down'>Scroll To Bottom</a>

      </div>
    </header>
  )
}

export default Header