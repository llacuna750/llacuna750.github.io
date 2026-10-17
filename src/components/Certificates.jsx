import { useState, useEffect } from 'react'
import { certificatesData } from '../data/portfolioData.js'

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section className="certificates-section" id="certificates" aria-labelledby="certificates-title">
      <div className="section-wrap">
        <div className="section-header-split">
          <div>
            <div className="section-kicker">
              <span className="section-kicker-number">02</span>
              <span>Courses & Certifications</span>
            </div>
            <h2 className="section-title" id="certificates-title">
              Verified milestones in <span>software & web.</span>
            </h2>
          </div>
          <p className="section-description" style={{ maxWidth: '380px' }}>
            Accredited course completions validating algorithmic logic, language syntax,
            and interface design foundations.
          </p>
        </div>

        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="certificate-card"
              role="button"
              tabIndex={0}
              onClick={() => setSelectedCert(cert)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedCert(cert)
                }
              }}
              aria-label={`Inspect ${cert.title} certificate from ${cert.provider}`}
            >
              <div className={`certificate-banner ${cert.accentColor}`}>
                <span className="cert-issuer">{cert.provider}</span>
                <span className="cert-symbol">{cert.symbol}</span>
              </div>
              <div className="certificate-details">
                <h3 className="certificate-title">{cert.title}</h3>
                <div className="cert-unboxed-meta">
                  <span>{cert.provider}</span>
                  <span>·</span>
                  <span>{cert.date}</span>
                </div>
                <span className="cert-inspect-link">
                  View details & verify <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Inspect Modal Dialog */}
      {selectedCert && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title-group">
                <div className="modal-issuer-badge">
                  {selectedCert.provider} Verified Course
                </div>
                <h3 id="modal-cert-title">{selectedCert.title}</h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedCert.description}</p>

              <div className="modal-info-grid">
                <div className="modal-info-item">
                  <span className="modal-item-label">Issuer</span>
                  <span className="modal-item-value">{selectedCert.provider}</span>
                </div>
                <div className="modal-info-item">
                  <span className="modal-item-label">Credential ID</span>
                  <span className="modal-item-value">{selectedCert.credentialId}</span>
                </div>
                <div className="modal-info-item">
                  <span className="modal-item-label">Domain</span>
                  <span className="modal-item-value">{selectedCert.category}</span>
                </div>
                <div className="modal-info-item">
                  <span className="modal-item-label">Completed</span>
                  <span className="modal-item-value">{selectedCert.date}</span>
                </div>
              </div>

              <div className="modal-skills-section">
                <h4>Skills & Competencies Verified</h4>
                <div className="modal-skills-list">
                  {selectedCert.skills.map((skill) => (
                    <span className="modal-skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn-secondary"
                onClick={() => setSelectedCert(null)}
              >
                Close
              </button>
              <a
                className="btn-primary"
                href={selectedCert.url}
                target="_blank"
                rel="noreferrer"
              >
                Open Official Certificate <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
