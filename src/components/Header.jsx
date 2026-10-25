import { useEffect, useState } from 'react'

function Header({ theme, onThemeToggle, isProjectPage = false }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const homeHref = isProjectPage ? '/' : '#top'
  const navigationItems = isProjectPage
    ? [
        { href: '/#about', label: 'About' },
        { href: '/#projects', label: 'Work' },
        { href: '/#activity', label: 'Activity' },
        { href: '/#contact', label: 'Contact' },
      ]
    : [
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Work' },
        { href: '#activity', label: 'Activity' },
        { href: '#contact', label: 'Contact' },
      ]

  useEffect(() => {
    function closeMenuOnEscape(event) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeMenuOnEscape)
    return () => window.removeEventListener('keydown', closeMenuOnEscape)
  }, [])

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia('(min-width: 721px)')

    function closeMenuOnDesktop(event) {
      if (event.matches) setIsMenuOpen(false)
    }

    desktopMediaQuery.addEventListener('change', closeMenuOnDesktop)
    return () => desktopMediaQuery.removeEventListener('change', closeMenuOnDesktop)
  }, [])

  return (
    <header className="site-header-wrapper">
      <div className="section-wrap site-header">
        <a className="wordmark" href={homeHref} aria-label="Gabriel Llacuna - home">
          Gabriel Llacuna
        </a>

        <nav
          className={`main-nav${isMenuOpen ? ' is-open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-controls">
          <button
            className="theme-toggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${nextTheme} mode`}
            aria-pressed={theme === 'dark'}
            title={`Switch to ${nextTheme} mode`}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z" />
              </svg>
            )}
            <span className="visually-hidden">Switch to {nextTheme} mode</span>
          </button>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-controls="main-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
            <span className="visually-hidden">
              {isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
