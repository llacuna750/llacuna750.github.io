import profilePicture from '../profilepicture/pangprofile.png'

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

      <div className="hero-profile-container">
        <div className="profile-accent-circle" aria-hidden="true" />
        <figure className="profile-card">
          <img
            className="profile-photo"
            src={profilePicture}
            alt="Portrait of Gabriel Llacuna"
          />
          <figcaption className="profile-card-caption">
            <span className="profile-card-label">INFORMATION TECHNOLOGY STUDENT</span>
            <strong>Gabriel Llacuna</strong>
            <span>Networking · Programming · Web</span>
          </figcaption>
        </figure>
        <span className="profile-float-tag">LEARNING BY BUILDING</span>
      </div>
    </section>
  )
}

export default Hero
