import { projectsData } from '../data/portfolioData.js'

function Projects() {
  return (
    <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-wrap">
        <p className="eyebrow">02 / Selected work</p>
        <div className="section-intro">
          <h2 id="projects-title">Small projects, built to make ideas tangible.</h2>
          <p>Practical exercises in networking, systems thinking, and programming.</p>
        </div>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <article className="project-row" key={project.id}>
              <span className="project-number">0{index + 1}</span>
              <div>
                <p className="project-kind">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                View <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
