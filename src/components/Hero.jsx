import profilePicture from '../profilepicture/pangprofile.png'

function Hero() {
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Gabriel Llacuna</h1>
        <p className="hero-role">Information Technology student · Philippines</p>
        <p className="hero-lead">
          I learn by making useful things and understanding how they work —
          from networks and systems to simple, well-built interfaces.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#projects">Selected work</a>
          <a className="text-link" href="https://github.com/llacuna750" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <figure className="profile-card">
        <img className="profile-photo" src={profilePicture} alt="Portrait of Gabriel Llacuna" />
        <figcaption>Open to internships</figcaption>
      </figure>
    </section>
  )
}

export default Hero
