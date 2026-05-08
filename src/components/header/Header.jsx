import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/20211219_122505.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="home">
      <div className="header__bg-orb header__bg-orb--1"></div>
      <div className="header__bg-orb header__bg-orb--2"></div>
      <div className="header__bg-grid"></div>

      <div className="container header__container">
        <div className="header__content">
          <span className="header__greeting reveal">Hello, I'm</span>
          <h1 className="header__name reveal reveal-delay-1">
            Hasnain <span className="gradient-text">Mucklai</span>
          </h1>
          <div className="header__title reveal reveal-delay-2">
            <span className="header__title-text">Fullstack Developer</span>
            <span className="header__cursor">|</span>
          </div>
          <div className="reveal reveal-delay-3">
            <CTA />
          </div>
          <div className="reveal reveal-delay-4">
            <HeaderSocials />
          </div>
        </div>

        <div className="header__image reveal reveal-delay-2">
          <div className="header__image-glow"></div>
          <div className="header__image-frame">
            <img src={ME} alt="Hasnain Mucklai" />
          </div>
        </div>
      </div>

      <a href="#about" className="header__scroll-indicator">
        <span className="header__scroll-text">scroll</span>
        <span className="header__scroll-line"></span>
      </a>
    </header>
  )
}

export default Header
