import { certificatesData } from '../data/portfolioData.js'

function Certificates() {
  return (
    <section className="content-section certificates-section" id="certificates" aria-labelledby="certificates-title">
      <div className="section-wrap">
        <div className="section-intro">
          <div>
            <p className="eyebrow">03 / Learning</p>
            <h2 id="certificates-title">Courses and certifications.</h2>
          </div>
          <p>Evidence of the concepts I have been actively developing.</p>
        </div>
        <div className="certificate-list">
          {certificatesData.map((certificate) => (
            <a className="certificate-row" key={certificate.id} href={certificate.url} target="_blank" rel="noreferrer">
              <span>{certificate.provider}</span>
              <strong>{certificate.title}</strong>
              <span>{certificate.date} ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
