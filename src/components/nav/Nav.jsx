import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { MdWorkOutline, MdOutlineStickyNote2, MdPermContactCalendar } from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''} title="Home">
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} title="About">
        <SiAboutdotme />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} title="Experience">
        <MdWorkOutline />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} title="Portfolio">
        <MdOutlineStickyNote2 />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} title="Contact">
        <MdPermContactCalendar />
      </a>
    </nav>
  )
}

export default Nav
