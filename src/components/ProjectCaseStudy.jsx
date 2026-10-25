import { projectsData } from '../data/portfolioData.js'

function ProjectCaseStudy({ project }) {
  const relatedProject = projectsData.find(
    (item) => item.id === project.caseStudy.relatedProjectId,
  )

  return (
    <main id="top">
      <article className="case-study" aria-labelledby="case-study-title">
        <div className="section-wrap">
          <p className="section-label">
            <a href="/#projects">Project case study</a>
          </p>

          <header className="case-study-intro">
            <p className="case-study-kicker">{project.category} &middot; {project.type}</p>
            <h1 id="case-study-title">{project.seo.h1}</h1>
            <p className="case-study-lead">{project.seo.lead}</p>
            <div className="case-study-actions">
              <a className="btn-primary" href="/#contact">Contact me</a>
              <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub profile
              </a>
            </div>
          </header>

          <section className="case-study-facts-section" aria-labelledby="facts-title">
            <h2 className="section-label" id="facts-title">At a glance</h2>
            <dl className="case-study-facts">
              <div>
                <dt>Project type</dt>
                <dd>{project.type}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{project.caseStudy.focus}</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>{project.tags.join(', ')}</dd>
              </div>
            </dl>
          </section>

          <section className="case-study-section" aria-labelledby="challenge-title">
            <h2 id="challenge-title">The challenge</h2>
            <p>{project.caseStudy.challenge}</p>
          </section>

          <section className="case-study-section" aria-labelledby="solution-title">
            <h2 id="solution-title">What I built</h2>
            <p>{project.caseStudy.solution}</p>
          </section>

          <section className="case-study-section" aria-labelledby="evidence-title">
            <h2 id="evidence-title">What it demonstrates</h2>
            <ul className="case-study-list">
              {project.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </section>

          <section className="case-study-section" aria-labelledby="learning-title">
            <h2 id="learning-title">Key takeaway</h2>
            <p>{project.caseStudy.learning}</p>
          </section>

          <section className="case-study-section" aria-labelledby="skills-title">
            <h2 id="skills-title">Related skills</h2>
            <div className="project-tags" aria-label={`Skills used in ${project.title}`}>
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </section>

          <nav className="case-study-navigation" aria-label="Related portfolio links">
            <a className="text-link" href="/#projects">Back to all projects</a>
            {relatedProject && (
              <a className="text-link" href={relatedProject.path}>
                Next: {relatedProject.title}
              </a>
            )}
          </nav>
        </div>
      </article>
    </main>
  )
}

export default ProjectCaseStudy
