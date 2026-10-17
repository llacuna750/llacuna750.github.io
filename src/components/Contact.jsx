import { useState } from 'react'

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'llacuna750@gmail.com'

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email)
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea')
        textarea.value = email
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch (err) {
      console.warn('Clipboard copy failed:', err)
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-wrap">
        <div className="section-kicker">
          <span className="section-kicker-number">04</span>
          <span>Get in Touch</span>
        </div>

        <div className="contact-card-modern">
          <div className="contact-heading-wrap">
            <h2 id="contact-title">
              Ready to learn,<br />
              <span>grow, & contribute.</span>
            </h2>
            <p className="contact-pitch">
              I’m actively seeking IT internship opportunities and entry-level positions
              in network administration, systems support, or software engineering.
              Let’s connect!
            </p>
          </div>

          <div className="contact-actions-box">
            {/* Interactive Copy Email Button */}
            <button
              type="button"
              className={`copy-email-btn ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
              aria-label="Copy email address to clipboard"
            >
              <span>{email}</span>
              <span className="copy-action-indicator">
                {copied ? '✓ Copied to clipboard!' : '📋 Copy'}
              </span>
            </button>

            {/* Direct Mailto CTA */}
            <a
              className="btn-primary"
              href={`mailto:${email}`}
              style={{ width: '100%', height: '48px' }}
            >
              Send an Email Directly <span aria-hidden="true">↗</span>
            </a>

            <div className="contact-social-row">
              <span>Find me online:</span>
              <a
                className="social-link"
                href="https://github.com/llacuna750"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <span aria-hidden="true">·</span>
              <span>Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
