import React from 'react'
import './services.css'
import ME from '../../assets/sjsu.jpg'

const Services = () => {
  return (
    <section id='services'>
      <h2>Education</h2>

    <div className='container education__container'>
      <div className="image__SJSU">
        <div className="about__me-image-edit">
        <img src={ME} alt="SJSU logo" />
        </div>
          <div className="text__below-image">
            <h3>August 2021 - May 2025 (Expected)</h3>
            <p>Relevent Coursework: Database Management Systems, Object Oriented Design, Data Structures and Algorithms I & II, Enterprise Software, Introduction to AI, Operating Systems, Assembly Language Programming </p>
            <p>Programming Languages: Python, Java, JavaScript, TypeScript, HTML, CSS, SQL</p>
            <p>Frameworks: React, Angular, Next.js, FastAPI, Flask, Express, Tailwind CSS</p>
            <p>Developer Tools: Postman, Git, GitHub, VS Code, Visual Studio, PyCharm, Eclipse, IntelliJ, Docker</p>
            <p>Technologies: Node.js, MongoDB, Firebase, MySQL, SQLite, SQLAlchemy, PostgreSQL</p>
          </div>
      </div>
      
    </div>
    </section>
  )
}

export default Services