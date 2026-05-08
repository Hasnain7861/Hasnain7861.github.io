import React from 'react'
import CV from '../../assets/Hasnain_Abbas_Mucklai_Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" rel="noreferrer" className="btn">Resume</a>
      <a href="#contact" className="btn btn-primary">Contact Me</a>
    </div>
  )
}

export default CTA
