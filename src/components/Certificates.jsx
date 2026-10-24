import { certificatesData } from '../data/portfolioData.js'

function Certificates() {
  return (
    <section className="content-section" id="certificates" aria-labelledby="certificates-title">
      <div className="section-wrap">
        <h2 className="section-label" id="certificates-title">Learning</h2>
        <div className="certificate-list">
          {certificatesData.map((certificate) => (
            <a className="certificate-row" key={certificate.id} href={certificate.url} target="_blank" rel="noreferrer">
              <span>{certificate.provider}</span>
              <strong>{certificate.title}</strong>
              <span>{certificate.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
