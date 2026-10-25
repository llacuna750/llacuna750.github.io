import About from './components/About.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import GitHubActivity from './components/GitHubActivity.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import { useTheme } from './hooks/useTheme.js'
import './components/portfolio.css'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Header
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <main>
        <Hero />
        <About />
        <Projects />
        <GitHubActivity username="llacuna750" colorScheme={theme} />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
