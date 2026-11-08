function Techstack() {
  return (
    <section className="content-section" id="about" aria-labelledby="about-title">
      <div className="section-wrap about-grid">
        <h2 className="section-label" id="about-title">Techstack</h2>
        <div className="about-copy">
          {/* <p>I'm building my web development skills.</p> */}
          <dl className="profile-details">
            <div><dt>Frontend</dt><dd>HTML, CSS, JavaScript, React</dd></div>
            <div><dt>Backend</dt><dd>Node.js, Express.js</dd></div>
            <div><dt>Database</dt><dd>MySQL</dd></div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Techstack;
