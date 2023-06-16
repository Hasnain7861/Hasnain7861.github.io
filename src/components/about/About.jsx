import React from 'react'
import './about.css'
import ME from '../../assets/IMG_2571.jpg'
import {FaAward} from 'react-icons/fa'
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import {MdSportsBasketball} from 'react-icons/md'


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Picture of me" />
          </div>
        </div>
    
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Problem Solver</h5>
            </article>

            <article className='about__card'>
              <VscWorkspaceTrusted className='about__icon'/>
              <h5>Passionate</h5>
            </article>

            <article className='about__card'>
              <MdSportsBasketball className='about__icon'/>
              <h5>Sports Enthusiast</h5>
            </article>
          </div>

          <p>
          Hello there! I'm Hasnain Mucklai and thanks for viewing my webpage. I am currently pursuing my Bachelor's degree in software engineering.  I have always been captivated by the world of technology and find immense satisfaction in solving problems through programming. Beyond coding, I have a deep love for sports, I actively play soccer and basketball!
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default about