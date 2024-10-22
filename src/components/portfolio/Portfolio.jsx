import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/sjsu.jpg'
import GPT_Logo from '../../assets/chatgpt_logo.jpg'
import messaging_Logo from '../../assets/messaging_app_logo.jpg'
import Recipe_Logo from '../../assets/Recipe_App_Image.jpg'
import Ecommerce_logo from '../../assets/ecommerce_logo.jpg'
import scholarship_tracker_logo from '../../assets/Scholarship-tracker-logo.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

      <article className="portfolio__item">
          < div className="portfolio__item.image">
            <img src={scholarship_tracker_logo} alt="" />
            <h3>Scholarship Tracker</h3>

            <a href="https://github.com/Hasnain7861/scholarship-tracker" target="_blank" className='btn'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          < div className="portfolio__item.image">
            <img src={GPT_Logo} alt="" />
            <h3>ChatGPT Clone</h3>

            <a href="https://github.com/Hasnain7861/Chat-GPT-Clone" target="_blank" className='btn'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          < div className="portfolio__item.image">
            <img src={Recipe_Logo} alt="" />
            <h3>Recipe App</h3>

            <a href="https://github.com/Hasnain7861/Recipe_App" target="_blank"className='btn'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          < div className="portfolio__item.image">
            <img src={messaging_Logo} alt="" />
            <h3>Social Media Webpage</h3>

            <a href="https://github.com/neelp03/Team1" target="_blank" className='btn'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          < div className="portfolio__item.image">
            <img src={Ecommerce_logo} alt="" />
            <h3>Ecommerce Application</h3>

            <a href="https://github.com/Hasnain7861/FullStack-Ecommerce" target="_blank" className='btn'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio