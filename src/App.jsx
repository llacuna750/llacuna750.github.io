import About from './components/About.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import './components/portfolio.css'

// App is the page's outline: each section lives in its own component.
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
