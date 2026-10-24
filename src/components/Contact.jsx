function Contact() {
  const email = 'llacuna750@gmail.com'

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-wrap contact-content">
        <p className="eyebrow">04 / Contact</p>
        <h2 id="contact-title">Let's build something useful.</h2>
        <p>I'm looking for a place to learn, contribute, and grow with a thoughtful team.</p>
        <div className="contact-links">
          <a className="btn-primary" href={`mailto:${email}`}>Send an email</a>
          <a className="text-link" href="https://github.com/llacuna750" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
        <a className="email-link" href={`mailto:${email}`}>{email}</a>
      </div>
    </section>
  )
}

export default Contact
