function Header() {
  return (
    <header className="site-header-wrapper">
      <div className="section-wrap site-header">
        {/* Zone 1: Brand Wordmark */}
        <a className="wordmark" href="#top" aria-label="Gabriel Llacuna - IT Student Portfolio">
          {/* <span>GL</span>
          <span className="wordmark-badge">.</span>
          <span className="wordmark-sub">IT Student</span> 
          */}
        </a>

        {/* Zone 2: Concise Nav Links */}
        <nav className="main-nav" aria-label="Main Navigation">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#certificates">Certificates</a>
          <a className="nav-link" href="#projects">Projects & Labs</a>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="nav-action">
          <a className="nav-cta" href="#contact">
            Get in Touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
