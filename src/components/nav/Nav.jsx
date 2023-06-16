import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {MdWorkOutline} from 'react-icons/md'
import {MdOutlineStickyNote2} from 'react-icons/md'
import {MdPermContactCalendar} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about"onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme /></a>
      <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline /></a>
      <a href="#portfolio"onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdOutlineStickyNote2 /></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdPermContactCalendar /></a>
    </nav>
  )
}

export default Nav