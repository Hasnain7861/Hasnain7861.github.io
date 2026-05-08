import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="footer__gradient-line"></div>
      <div className="container footer__container">
        <a href="#home" className="footer__logo">
          Hasnain <span className="gradient-text">Mucklai</span>
        </a>

        <ul className="footer__links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Education</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Awards</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/hasnainmucklai/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
          <a href="https://github.com/Hasnain7861" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Hasnain Mucklai. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
