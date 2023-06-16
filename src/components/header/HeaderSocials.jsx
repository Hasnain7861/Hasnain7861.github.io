import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/hasnainmucklai/' target = '_blank'><BsLinkedin /></a>
        <a href='https://github.com/Hasnain7861' target = '_blank'><GoMarkGithub /></a>
    </div>
  )
}

export default HeaderSocials
