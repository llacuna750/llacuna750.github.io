function Hero() {
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-badge-row">
          <span className="hero-badge-tag">IT Student & Developer</span>
          <span>·</span>
          <span>Preparing for Internship</span>
        </div>

        <h1 id="hero-title">
          Hi, I’m <span className="hero-accent">Gabriel Llacuna.</span>
          <br />Studying IT, networking, & programming.
        </h1>

        <p className="hero-lead">
          I’m building practical computer science foundations—exploring network protocols,
          object-oriented programming, and web systems as I prepare for an internship or entry-level IT role.
        </p>

        <div className="hero-actions">
          <a className="btn-primary" href="#projects">
            Explore Projects & Labs <span aria-hidden="true">↓</span>
          </a>
          <a className="btn-secondary" href="#contact">
            Get in Touch <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="hero-proof-strip" aria-label="Quick statistics">
          <div className="hero-proof-item">
            <strong>8</strong>
            <span>Certifications</span>
          </div>
          <span className="hero-proof-dot" aria-hidden="true">·</span>
          <div className="hero-proof-item">
            <strong>TCP/IP & Java</strong>
            <span>Focus Areas</span>
          </div>
          <span className="hero-proof-dot" aria-hidden="true">·</span>
          <div className="hero-proof-item">
            <strong>Philippines</strong>
            <span>Based</span>
          </div>
        </div>
      </div>

      <div className="hero-code-container" aria-label="Technical profile preview">
        <div className="tech-code-card">
          <div className="code-card-header">
            <div className="window-dots" aria-hidden="true">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="code-card-filename">profile.ts</span>
          </div>
          <pre className="code-card-body"><code><span className="token-keyword">interface</span> <span className="token-type">ITStudent</span> {'{'}{'\n'}
  name: <span className="token-type">string</span>;{'\n'}
  discipline: <span className="token-type">string</span>;{'\n'}
  focusAreas: <span className="token-type">string[]</span>;{'\n'}
  readyForRole: <span className="token-type">boolean</span>;{'\n'}
{'}'}{'\n\n'}
<span className="token-keyword">const</span> profile: <span className="token-type">ITStudent</span> = {'{'}{'\n'}
  name: <span className="token-string">'Gabriel Llacuna'</span>,{'\n'}
  discipline: <span className="token-string">'Information Technology'</span>,{'\n'}
  focusAreas: [<span className="token-string">'Networking'</span>, <span className="token-string">'Java'</span>, <span className="token-string">'Web'</span>],{'\n'}
  readyForRole: <span className="token-keyword">true</span>{'\n'}
{'}'};</code></pre>
          <div className="code-card-footer">
            <span>// Learning continuously</span>
            <span className="verified-tag">✓ Verified Student</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
