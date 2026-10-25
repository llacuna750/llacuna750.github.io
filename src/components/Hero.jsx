import profilePicture from '../profilepicture/pangprofile.png'

function Hero() {
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Gabriel Llacuna &mdash; IT Networking Student</h1>
        <p className="hero-role">Networking, systems, and web development &middot; Philippines</p>
        <p className="hero-lead">
          I build practical React and JavaScript tools that make subnetting, network diagnostics,
          and IT concepts easier to understand. Open to IT networking internships and entry-level roles.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#projects">Selected work</a>
          <a className="text-link" href="https://github.com/llacuna750" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <figure className="profile-card">
        <img
          className="profile-photo"
          src={profilePicture}
          alt="Gabriel Llacuna, an Information Technology student focused on networking and web development"
        />
        <figcaption>Open to internships</figcaption>
      </figure>
    </section>
  )
}

export default Hero
