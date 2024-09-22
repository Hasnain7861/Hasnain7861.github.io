import React from 'react'
import CV from "../../assets/Hasnain_Mucklai_Resume.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} target="_blank" className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA