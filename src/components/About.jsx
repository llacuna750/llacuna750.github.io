import { useState } from 'react'
import { skillsCategories, skillsData } from '../data/portfolioData.js'

function About() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory)

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-wrap">
        <div className="section-kicker">
          <span className="section-kicker-number">01</span>
          <span>About & Foundations</span>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <h2 className="section-title" id="about-title">
              Learning core concepts.<br />
              <span>Growing through hands-on practice.</span>
            </h2>

            <p style={{ marginTop: '20px' }}>
              I’m <strong>Gabriel Llacuna</strong>, an Information Technology student with a strong passion
              for understanding how digital infrastructure works from the ground up. Whether it’s decoding
              how packets route across networks or architecting clean object-oriented applications, I focus on
              mastering the fundamentals before reaching for abstractions.
            </p>

            <p>
              I am actively expanding my capabilities through coursework, self-directed certification tracks,
              and code experiments. My goal is to join a collaborative team where I can contribute my energy,
              learn from seasoned engineers, and deliver dependable solutions.
            </p>

            <div className="about-credentials-box">
              <div className="about-stat-row">
                <span className="stat-label">Academic Path</span>
                <span className="stat-value">B.S. in Information Technology</span>
              </div>
              <div className="about-stat-row">
                <span className="stat-label">Core Interests</span>
                <span className="stat-value">Networking, Java, Web Systems</span>
              </div>
              <div className="about-stat-row">
                <span className="stat-label">Availability</span>
                <span className="stat-value">Internship & Entry-Level</span>
              </div>
            </div>
          </div>

          <div className="skills-column" id="skills">
            <div className="skills-filter-header">
              <h3 style={{ margin: '0 0 14px', fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                Technical Competencies
              </h3>
            </div>

            {/* Interactive Filter Tabs */}
            <div className="skills-filter-tabs" role="tablist" aria-label="Skill categories">
              {skillsCategories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Filtered Skill List */}
            <div className="skills-list">
              {filteredSkills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
