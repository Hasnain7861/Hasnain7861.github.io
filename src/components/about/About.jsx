import React from 'react'
import './about.css'
import ME from '../../assets/IMG_2571.jpg'
import { FaAward } from 'react-icons/fa'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { MdSportsBasketball } from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__image reveal">
          <div className="about__image-border">
            <div className="about__image-inner">
              <img src={ME} alt="Hasnain Mucklai" />
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card glass-card reveal reveal-delay-1">
              <FaAward className="about__icon" />
              <h5>Problem Solver</h5>
            </article>
            <article className="about__card glass-card reveal reveal-delay-2">
              <VscWorkspaceTrusted className="about__icon" />
              <h5>Passionate</h5>
            </article>
            <article className="about__card glass-card reveal reveal-delay-3">
              <MdSportsBasketball className="about__icon" />
              <h5>Sports Enthusiast</h5>
            </article>
          </div>

          <p className="about__bio reveal reveal-delay-3">
            Hello there! I'm Hasnain Mucklai and thanks for viewing my webpage. I am currently pursuing my Bachelor's degree in software engineering. I have always been captivated by the world of technology and find immense satisfaction in solving problems through programming. Beyond coding, I have a deep love for sports, I actively play soccer and basketball!
          </p>

          <div className="reveal reveal-delay-4">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
