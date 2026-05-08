import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/hasnainmucklai/" target="_blank" rel="noreferrer" className="header__social-link">
        <BsLinkedin />
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/Hasnain7861" target="_blank" rel="noreferrer" className="header__social-link">
        <FaGithub />
        <span>GitHub</span>
      </a>
    </div>
  )
}

export default HeaderSocials
