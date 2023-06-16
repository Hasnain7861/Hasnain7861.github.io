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
            <p>Relevent Coursework: Database Management Systems, Object Oriented Design, Data Structures and Algorithms I & II, Assembly Language Programming </p>
            <p>Languages and Databases: Java, Python, JavaScript, HTML/CSS, SQL, mongoDB</p>
            <p>Frameworks: React, Node.js, Flask</p>
            <p>Developer Tools: Git, VSCode, IntelliJ, Eclipse</p>
          </div>
      </div>
      
    </div>
    </section>
  )
}

export default Services