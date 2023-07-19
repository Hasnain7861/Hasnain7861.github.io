import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/sjsu.jpg'
import GPT_Logo from '../../assets/Chat_GPT_Clone.png'
import messaging_Logo from '../../assets/messaging_app_logo.jpg'
import Recipe_Logo from '../../assets/Recipe_App_Image.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
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
      </div>
    </section>
  )
}

export default Portfolio