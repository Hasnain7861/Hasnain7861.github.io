import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Most Recent</h5>
      <h2>Work Experience</h2>

      <div className="container experience__container">
      <div className="experience__SJSU">
      <h3>San Jose State University</h3>  
        <h6>Introduction to Programming Lab Instructor</h6>
        <h7>August 2023 - Present</h7>
          <div className="experience__content">
            <ul className="experience__details">
              <li>
              <BsPatchCheckFill className="experience__list-icon" />
              <p4> Explained procedures and core concepts for 30+ students to complete the lab.</p4>
              </li>
              <li>
              <BsPatchCheckFill className="experience__list-icon" />
              <p4> Assisted students with concepts relating to OOPs, Java, and IDEs.</p4>
              </li>
              <li>
              <BsPatchCheckFill className="experience__list-icon" />
              <p4> Graded students' assignments and quizzes.</p4>
              </li>
              <li>
              <BsPatchCheckFill className="experience__list-icon" />
              <p4> Established a friendly learning environment.</p4>
              </li>
            </ul>  
          </div>
        </div>
        <div className="experience__SJSU">
          <h3>San Jose State University</h3>
          <h6>Community Desk Assistant</h6>
          <h7>August 2022 - Present</h7>
          <div className="experience__content">
            <ul className="experience__details">
              <li>
              <BsPatchCheckFill className="experience__list-icon" />
              <p4> Coordinate and record student housing equipment rentals.</p4>
              </li>
              <li>
              <BsPatchCheckFill className="experience__list-icon" />
              <p4> Provision and record new and replacement key cards issued to dorm residents.</p4>
              </li>
              <li>
              <BsPatchCheckFill className="experience__list-icon" />
              <p4> Update university housing database with upto date records.</p4>
              </li>
            </ul>  
          </div>
        </div>
        <div className="experience__SJSU">
        <h3>IBM</h3>
          <h6>Good Tech Scholars Program Participant</h6>
          <h7>July 2022 - August 2022</h7>
          <div className="experience__content">
            <ul className="experience__details">
              <li>
              <BsPatchCheckFill className="experience__list-icon" />
              <p4> Developed design, technical and professional skills in sessions led by IBM employees.</p4>
              </li>
              <li>
              <BsPatchCheckFill className="experience__list-icon" />
              <p4> Collaborated with a team of 3, working with IBM mentors to solve real-world problems.</p4>
              </li>
              <li>
              <BsPatchCheckFill className="experience__list-icon" />
              <p4> Learned the basics of cloud computing.</p4>
              </li>
            </ul>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience