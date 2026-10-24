import { skillsData } from '../data/portfolioData.js'

function About() {
  return (
    <section className="content-section" id="about" aria-labelledby="about-title">
      <div className="section-wrap about-grid">
        <h2 className="section-label" id="about-title">About</h2>
        <div className="about-copy">
          <p>
            I focus on the fundamentals first: how networks route information,
            how programs are structured, and how thoughtful interfaces are built.
          </p>
          <p>
            I'm growing through coursework, certifications, and small practical
            projects while preparing to contribute to a collaborative team.
          </p>
          <dl className="profile-details">
            <div><dt>Studying</dt><dd>B.S. Information Technology</dd></div>
            <div><dt>Focus</dt><dd>Networking, Java, web systems</dd></div>
            <div><dt>Looking for</dt><dd>Internship / entry-level role</dd></div>
          </dl>
        </div>
      </div>

      <div className="section-wrap skills-block" id="skills">
        <p className="section-label">Skills</p>
        <div className="skill-list" aria-label="Technical skills">
          {skillsData.map((skill) => <span key={skill.name}>{skill.name}</span>)}
        </div>
      </div>
    </section>
  )
}

export default About
