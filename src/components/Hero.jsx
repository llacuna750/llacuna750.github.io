import profilePicture from '../profilepicture/pangprofile.png'

function Hero() {
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Information Technology student · Philippines</p>
        <h1 id="hero-title">Building a solid foundation in systems, code, and networks.</h1>
        <p className="hero-lead">
          I'm Gabriel Llacuna, an IT student learning by making useful things and
          understanding how they work from the ground up.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#projects">View selected work</a>
          <a className="text-link" href="https://github.com/llacuna750" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="hero-note">Open to internship and entry-level opportunities.</p>
      </div>

      <figure className="profile-card">
        <img className="profile-photo" src={profilePicture} alt="Portrait of Gabriel Llacuna" />
        <figcaption>Gabriel Llacuna <span>— IT student</span></figcaption>
      </figure>
    </section>
  )
}

export default Hero
