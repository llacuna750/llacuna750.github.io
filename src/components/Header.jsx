function Header({ theme, onThemeToggle }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <header className="site-header-wrapper">
      <div className="section-wrap site-header">
        <a className="wordmark" href="#top" aria-label="Gabriel Llacuna - home">
          Gabriel Llacuna
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#activity">Activity</a>
          <a href="#contact">Contact</a>
        </nav>

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
      </div>
    </header>
  )
}

export default Header
