import { useState } from 'react'
import shinPicture from '../../6038-dorohedoro-shin.png'
import profilePicture from '../profilepicture/pangprofile.png'

const tileNumbers = Array.from({ length: 10 }, (_, index) => index + 1)
const lineNumbers = [1, 2, 3]

function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      className="hero section-wrap"
      id="top"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <h1 id="hero-title">Gabriel Llacuna</h1>
        <p className="hero-role">Web development learner &middot; Open to opportunities &middot; Philippines</p>
        <p className="hero-lead">
          I'm eager to{' '}
          <span className="visually-hidden">learn, build, and grow</span>
          <span className="typewriter" aria-hidden="true" />.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#contact">
            Contact me
          </a>
          <a
            className="text-link"
            href="https://github.com/llacuna750"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <figure
        className={`profile-card card${isHovered ? " is-hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="profile-photo profile-photo-shin"
          src={shinPicture}
          alt={isHovered ? "" : "Shin from Dorohedoro"}
          aria-hidden={isHovered}
        />
        <img
          className="profile-photo profile-photo-real"
          src={profilePicture}
          alt={isHovered ? "Portrait of Gabriel Llacuna" : ""}
          aria-hidden={!isHovered}
        />
        <div className="background" aria-hidden="true">
          <div className="tiles">
            {tileNumbers.map((tile) => (
              <span className={`tile tile-${tile}`} key={tile} />
            ))}
          </div>
          {lineNumbers.map((line) => (
            <span className={`line line-${line}`} key={line} />
          ))}
        </div>
        <div className="shine" aria-hidden="true" />
      </figure>
    </section>
  );
}

export default Hero
