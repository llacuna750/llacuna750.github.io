import Footer from './Footer.jsx'
import Header from './Header.jsx'
import ProjectCaseStudy from './ProjectCaseStudy.jsx'
import { projectsData } from '../data/portfolioData.js'
import { useTheme } from '../hooks/useTheme.js'

function ProjectPage() {
  const { theme, toggleTheme } = useTheme()
  const project = projectsData.find((item) => item.id === document.body.dataset.projectId)

  return (
    <>
      <Header theme={theme} onThemeToggle={toggleTheme} isProjectPage />
      {project ? (
        <ProjectCaseStudy project={project} />
      ) : (
        <main className="not-found section-wrap" id="top">
          <h1>Project not found</h1>
          <p>The project you requested is not available.</p>
          <a className="btn-primary" href="/#projects">Back to projects</a>
        </main>
      )}
      <Footer isProjectPage />
    </>
  )
}

export default ProjectPage
