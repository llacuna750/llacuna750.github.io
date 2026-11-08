import TechIcon from './TechIcon.jsx'

const techGroups = [
  {
    title: 'Frontend',
    technologies: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
    ],
  },
  {
    title: 'Backend',
    technologies: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Express.js', icon: 'express' },
    ],
  },
  {
    title: 'Database',
    technologies: [{ name: 'MySQL', icon: 'mysql' }],
  },
]

const tileNumbers = Array.from({ length: 10 }, (_, index) => index + 1)
const lineNumbers = [1, 2, 3]

function Techstack() {
  return (
    <section className="content-section" id="about" aria-labelledby="about-title">
      <div className="section-wrap about-grid">
        <h2 className="section-label" id="about-title">Techstack</h2>
        <div className="about-copy">
          {/* <p>I'm building my web development skills.</p> */}
          <dl className="profile-details">
            {techGroups.map((group) => (
              <div className="card tech-card" key={group.title}>
                <div className="shine" aria-hidden="true" />
                <div className="background" aria-hidden="true">
                  <div className="tiles">
                    {tileNumbers.map((tile) => (
                      <span className={`tile tile-${tile}`} key={tile} />
                    ))}
                  </div>
                  {lineNumbers.map((line) => (
                    <span className={`line line-${line}`} key={line} />
                  ))}
                </div>
                <dt>{group.title}</dt>
                <dd className="tech-items">
                  {group.technologies.map((technology) => (
                    <span className="tech-item" key={technology.name}>
                      <TechIcon type={technology.icon} />
                      <span>{technology.name}</span>
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Techstack;
