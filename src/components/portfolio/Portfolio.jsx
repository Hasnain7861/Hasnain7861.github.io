import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/sjsu.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="containre portfolio__container">
        <article className="portfolio__item">
          < div classname="portfolio__item.image">
            <img src={IMG1} alt="" />
            <h3>This is a portfolio item title</h3>

            <a href="https://github.com" target="_blank" className='btn'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          < div classname="portfolio__item.image">
            <img src={IMG1} alt="" />
            <h3>This is a portfolio item title</h3>

            <a href="https://github.com" target="_blank"className='btn'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          < div classname="portfolio__item.image">
            <img src={IMG1} alt="" />
            <h3>This is a portfolio item title</h3>

            <a href="https://github.com" target="_blank" className='btn'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio