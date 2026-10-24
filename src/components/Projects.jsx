import { projectsData } from '../data/portfolioData.js'

function Projects() {
  return (
    <section className="content-section" id="projects" aria-labelledby="projects-title">
      <div className="section-wrap">
        <h2 className="section-label" id="projects-title">Work</h2>
        <div className="projects-list">
          {projectsData.map((project) => (
            <article className="project-row" key={project.id}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              {/* <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                GitHub
              </a> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
