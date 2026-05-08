import React from 'react'
import './testimonials.css'
import SJSU from '../../assets/sjsu.jpg'
import CodePath from '../../assets/CodePath_Logo.jpg'

const data = [
  {
    avatar: SJSU,
    name: "President's Scholar",
    review: 'Awarded to students who have a 4.0 GPA in a specific semester',
  },
  {
    avatar: SJSU,
    name: "Dean's Scholar",
    review: 'Awarded to students who have a GPA higher than 3.65 in a specific semester',
  },
  {
    avatar: CodePath,
    name: 'CodePath Advanced Technical Interview Preparation',
    review: 'Selected to take part in an 11 week course between June 2023 and August 2023 that prepares students for technical interviews.',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Recognition</h5>
      <h2>Awards</h2>

      <div className="container awards__grid">
        {data.map(({ avatar, name, review }, index) => (
          <div className={`award__card glass-card reveal reveal-delay-${index + 1}`} key={index}>
            <div className="award__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h4 className="award__name">{name}</h4>
            <p className="award__review">{review}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
