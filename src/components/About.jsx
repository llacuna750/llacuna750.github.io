import { skillsData } from '../data/portfolioData.js'

function About() {
  return (
    <section className="content-section" id="about" aria-labelledby="about-title">
      <div className="section-wrap about-grid">
        <div>
          <p className="eyebrow">01 / About</p>
          <h2 id="about-title">Curious about the systems behind the screen.</h2>
        </div>
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
            <div><dt>Interested in</dt><dd>Networking, Java, web systems</dd></div>
            <div><dt>Looking for</dt><dd>Internship / entry-level role</dd></div>
          </dl>
        </div>
      </div>

      <div className="section-wrap skills-block" id="skills">
        <p className="eyebrow">Core skills</p>
        <div className="skill-list" aria-label="Technical skills">
          {skillsData.map((skill) => <span key={skill.name}>{skill.name}</span>)}
        </div>
      </div>
    </section>
  )
}

export default About
