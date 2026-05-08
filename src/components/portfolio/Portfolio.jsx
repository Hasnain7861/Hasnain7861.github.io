import React from 'react'
import './portfolio.css'
import { FiExternalLink } from 'react-icons/fi'

import scholarship_tracker_logo from '../../assets/Scholarship-tracker-logo.png'
import GPT_Logo from '../../assets/chatgpt_logo.jpg'
import Recipe_Logo from '../../assets/Recipe_App_Image.jpg'
import student_stash_logo from '../../assets/Student-stash-logo.png'
import messaging_Logo from '../../assets/messaging_app_logo.jpg'
import Ecommerce_logo from '../../assets/ecommerce_logo.jpg'

const projects = [
  {
    title: 'Scholarship Tracker',
    image: scholarship_tracker_logo,
    github: 'https://github.com/Hasnain7861/scholarship-tracker',
  },
  {
    title: 'ChatGPT Clone',
    image: GPT_Logo,
    github: 'https://github.com/Hasnain7861/Chat-GPT-Clone',
  },
  {
    title: 'Recipe App',
    image: Recipe_Logo,
    github: 'https://github.com/Hasnain7861/Recipe_App',
  },
  {
    title: 'Student Stash',
    image: student_stash_logo,
    github: 'https://github.com/CMPE133-Group-Project/student_stash',
  },
  {
    title: 'Social Media Webpage',
    image: messaging_Logo,
    github: 'https://github.com/neelp03/Team1',
  },
  {
    title: 'Ecommerce Application',
    image: Ecommerce_logo,
    github: 'https://github.com/Hasnain7861/FullStack-Ecommerce',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project, index) => (
          <article
            className={`portfolio__card glass-card reveal reveal-delay-${Math.min((index % 3) + 1, 3)}`}
            key={index}
          >
            <div className="portfolio__image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="portfolio__info">
              <h3>{project.title}</h3>
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-sm">
                Github <FiExternalLink />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
