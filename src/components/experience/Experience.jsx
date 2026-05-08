import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

import capitalGroupLogo from '../../assets/capital_group_logo.png'
import fidelityLogo from '../../assets/fidelity_logo.png'
import sjsuLogo from '../../assets/sjsu_logo.png'
import ibmLogo from '../../assets/ibm_logo.png'

const experiences = [
  {
    company: 'Capital Group',
    role: 'Software Engineer I',
    dates: 'September 2025 – Present',
    logo: capitalGroupLogo,
    bullets: [],
  },
  {
    company: 'Fidelity Investments',
    role: 'Software Engineer Intern',
    dates: 'May 2024 – August 2024',
    logo: fidelityLogo,
    bullets: [
      'Rewrote API integration with Angular Query, achieving 40% faster data fetching and seamless automatic updates on successful edits.',
      'Authored over 50 unit tests, achieving over 90% code coverage and resulting in a 25% reduction in bugs, ensuring high-quality, maintainable code.',
      'Developed and implemented several feature components in Angular, improving user interface clarity and responsiveness by 30%.',
    ],
  },
  {
    company: 'San Jose State University',
    role: 'Introduction to Programming Lab Instructor',
    dates: 'August 2023 – May 2024',
    logo: sjsuLogo,
    bullets: [
      'Explained procedures and core concepts for 30+ students to complete the lab.',
      'Assisted students with concepts relating to OOPs, Java, and IDEs.',
      "Graded students' assignments and quizzes.",
      'Established a friendly learning environment.',
    ],
  },
  {
    company: 'San Jose State University',
    role: 'Community Desk Assistant',
    dates: 'August 2022 – Present',
    logo: sjsuLogo,
    bullets: [
      'Coordinate and record student housing equipment rentals.',
      'Provision and record new and replacement key cards issued to dorm residents.',
      'Update university housing database with upto date records.',
    ],
  },
  {
    company: 'IBM',
    role: 'Good Tech Scholars Program Participant',
    dates: 'July 2022 – August 2022',
    logo: ibmLogo,
    bullets: [
      'Developed design, technical and professional skills in sessions led by IBM employees.',
      'Collaborated with a team of 3, working with IBM mentors to solve real-world problems.',
      'Learned the basics of cloud computing.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Most Recent</h5>
      <h2>Work Experience</h2>

      <div className="container experience__container">
        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div className={`experience__card glass-card reveal reveal-delay-${Math.min(index + 1, 4)}`} key={index}>
              <div className="experience__timeline-dot"></div>
              <div className="experience__header">
                <div className="experience__header-left">
                  <div className="experience__logo">
                    <img src={exp.logo} alt={`${exp.company} logo`} />
                  </div>
                  <div>
                    <h3>{exp.company}</h3>
                    {exp.role && <p className="experience__role">{exp.role}</p>}
                  </div>
                </div>
                <span className="experience__dates">{exp.dates}</span>
              </div>
              {exp.bullets.length > 0 && (
                <ul className="experience__bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>
                      <BsPatchCheckFill className="experience__check" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
