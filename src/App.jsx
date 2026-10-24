import { useEffect, useState } from 'react'
import About from './components/About.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import GitHubActivity from './components/GitHubActivity.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import './components/portfolio.css'

const themeStorageKey = 'portfolio-theme'

function getInitialTheme() {
  const documentTheme = document.documentElement.dataset.theme
  if (documentTheme === 'light' || documentTheme === 'dark') return documentTheme

  try {
    const savedTheme = window.localStorage.getItem(themeStorageKey)
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {
    // Fall back to the system preference when storage is unavailable.
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#0c1222' : '#f7f8fc',
    )

    try {
      window.localStorage.setItem(themeStorageKey, theme)
    } catch {
      // Theme selection still works if storage is unavailable.
    }
  }, [theme])

  return (
    <>
      <Header
        theme={theme}
        onThemeToggle={() => setTheme((currentTheme) => (
          currentTheme === 'dark' ? 'light' : 'dark'
        ))}
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
