function Header() {
  return (
    <header className="site-header-wrapper">
      <div className="section-wrap site-header">
        <a className="wordmark" href="#top" aria-label="Gabriel Llacuna - home">
          GL<span>.</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#activity">Activity</a>
        </nav>

        <a className="nav-cta" href="#contact">Let's talk</a>
      </div>
    </header>
  )
}

export default Header
