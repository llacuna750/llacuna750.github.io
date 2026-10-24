import About from './components/About.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import GitHubActivity from './components/GitHubActivity.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import './components/portfolio.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <GitHubActivity username="llacuna750" />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
