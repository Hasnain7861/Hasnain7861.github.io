import React from 'react'
import './services.css'
import ME from '../../assets/sjsu.jpg'

const skillCategories = [
  {
    label: 'Relevant Coursework',
    skills: [
      'Database Management Systems', 'Object Oriented Design',
      'Data Structures and Algorithms I & II', 'Enterprise Software',
      'Introduction to AI', 'Operating Systems', 'Assembly Language Programming',
    ],
  },
  {
    label: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Frameworks',
    skills: ['React', 'Angular', 'Next.js', 'FastAPI', 'Flask', 'Express', 'Tailwind CSS'],
  },
  {
    label: 'Developer Tools',
    skills: ['Postman', 'Git', 'GitHub', 'VS Code', 'Visual Studio', 'PyCharm', 'Eclipse', 'IntelliJ', 'Docker'],
  },
  {
    label: 'Technologies',
    skills: ['Node.js', 'MongoDB', 'Firebase', 'MySQL', 'SQLite', 'SQLAlchemy', 'PostgreSQL'],
  },
]

const Services = () => {
  return (
    <section id="services">
      <h5>Where I Studied</h5>
      <h2>Education</h2>

      <div className="container education__container">
        <div className="education__card glass-card reveal">
          <div className="education__top">
            <div className="education__logo">
              <img src={ME} alt="SJSU logo" />
            </div>
            <div className="education__info">
              <h3>San Jose State University</h3>
              <p className="education__degree">B.S. Software Engineering</p>
              <span className="education__dates">August 2021 – May 2025 (Expected)</span>
            </div>
          </div>

          <div className="education__skills">
            {skillCategories.map((category, index) => (
              <div className={`education__skill-group reveal reveal-delay-${Math.min(index + 1, 5)}`} key={index}>
                <h4>{category.label}</h4>
                <div className="education__tags">
                  {category.skills.map((skill, i) => (
                    <span className="skill-tag" key={i}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
