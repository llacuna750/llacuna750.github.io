import { useState } from 'react'
import { projectsData } from '../data/portfolioData.js'

function Projects() {
  // Subnet simulator state
  const [selectedCidr, setSelectedCidr] = useState('/24')

  const subnetMap = {
    '/16': { mask: '255.255.0.0', hosts: '65,534', net: '192.168.0.0', bcast: '192.168.255.255' },
    '/24': { mask: '255.255.255.0', hosts: '254', net: '192.168.1.0', bcast: '192.168.1.255' },
    '/25': { mask: '255.255.255.128', hosts: '126', net: '192.168.1.0', bcast: '192.168.1.127' },
    '/26': { mask: '255.255.255.192', hosts: '62', net: '192.168.1.0', bcast: '192.168.1.63' },
    '/28': { mask: '255.255.255.240', hosts: '14', net: '192.168.1.0', bcast: '192.168.1.15' },
    '/30': { mask: '255.255.255.252', hosts: '2 (Point-to-Point)', net: '192.168.1.0', bcast: '192.168.1.3' }
  }

  // Ping simulation state
  const [pingRunning, setPingRunning] = useState(false)
  const [pingResults, setPingResults] = useState([
    { service: 'DNS (Port 53)', latency: '18ms', status: 'Active' },
    { service: 'HTTP (Port 80)', latency: '24ms', status: 'Active' },
    { service: 'HTTPS (Port 443)', latency: '31ms', status: 'Active' },
    { service: 'SSH (Port 22)', latency: '42ms', status: 'Active' }
  ])

  const runDiagnosticPing = () => {
    setPingRunning(true)
    setTimeout(() => {
      setPingResults([
        { service: 'DNS (Port 53)', latency: `${Math.floor(Math.random() * 12 + 14)}ms`, status: 'Resolved' },
        { service: 'HTTP (Port 80)', latency: `${Math.floor(Math.random() * 15 + 20)}ms`, status: 'OK (200)' },
        { service: 'HTTPS (Port 443)', latency: `${Math.floor(Math.random() * 18 + 26)}ms`, status: 'TLS 1.3 OK' },
        { service: 'SSH (Port 22)', latency: `${Math.floor(Math.random() * 20 + 35)}ms`, status: 'Listening' }
      ])
      setPingRunning(false)
    }, 450)
  }

  // OSI Layer state
  const [selectedOsi, setSelectedOsi] = useState('Layer 4')
  const osiData = {
    'Layer 7': { name: 'Application Layer', pdu: 'Data', protocols: 'HTTP, DNS, SSH, DHCP', desc: 'Direct interface with user software; facilitates request/response cycles.' },
    'Layer 4': { name: 'Transport Layer', pdu: 'Segments', protocols: 'TCP, UDP', desc: 'Handles end-to-end communication, flow control, and port addressing.' },
    'Layer 3': { name: 'Network Layer', pdu: 'Packets', protocols: 'IPv4, IPv6, ICMP, ARP', desc: 'Manages logical addressing and routing paths across subnets.' },
    'Layer 2': { name: 'Data Link Layer', pdu: 'Frames', protocols: 'Ethernet (802.3), MAC', desc: 'Encapsulates packets into frames for physical hop-by-hop transmission.' }
  }

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-wrap">
        <div className="section-header-split">
          <div>
            <div className="section-kicker">
              <span className="section-kicker-number">03</span>
              <span>Selected Work & Labs</span>
            </div>
            <h2 className="section-title" id="projects-title">
              Practical utilities & <span>hands-on labs.</span>
            </h2>
          </div>
          <p className="section-description" style={{ maxWidth: '420px' }}>
            Interactive tools and technical references created to test, visualize,
            and reinforce networking logic and software fundamentals.
          </p>
        </div>

        <div className="projects-grid">
          {/* Card 1: Subnet Calculator */}
          <article className="project-card">
            <div className="project-card-header">
              <div>
                <div className="project-category-kicker">Networking Utility</div>
                <div className="project-type-label">CIDR Math & Subnetting</div>
              </div>
              <span className="simulator-badge">Interactive</span>
            </div>

            <div className="project-card-body">
              <h3 className="project-card-title">{projectsData[0].title}</h3>
              <p className="project-card-summary">{projectsData[0].summary}</p>

              {/* Subnet Live Tool */}
              <div className="project-simulator-box">
                <div className="simulator-title">
                  <span>CIDR Prefix Selector</span>
                  <span className="simulator-badge">Base IP: 192.168.1.0</span>
                </div>

                <div className="subnet-input-row">
                  <select
                    className="subnet-select"
                    value={selectedCidr}
                    onChange={(e) => setSelectedCidr(e.target.value)}
                    aria-label="Select CIDR Prefix"
                  >
                    <option value="/24">/24 (256 IP Block)</option>
                    <option value="/25">/25 (128 IP Block)</option>
                    <option value="/26">/26 (64 IP Block)</option>
                    <option value="/28">/28 (16 IP Block)</option>
                    <option value="/30">/30 (4 IP Point-to-Point)</option>
                    <option value="/16">/16 (Class B Block)</option>
                  </select>
                </div>

                <div className="subnet-results-grid">
                  <div className="subnet-result-item">
                    <span className="subnet-item-label">Subnet Mask</span>
                    <span className="subnet-item-val">{subnetMap[selectedCidr].mask}</span>
                  </div>
                  <div className="subnet-result-item">
                    <span className="subnet-item-label">Usable Hosts</span>
                    <span className="subnet-item-val">{subnetMap[selectedCidr].hosts}</span>
                  </div>
                  <div className="subnet-result-item">
                    <span className="subnet-item-label">Network ID</span>
                    <span className="subnet-item-val">{subnetMap[selectedCidr].net}</span>
                  </div>
                  <div className="subnet-result-item">
                    <span className="subnet-item-label">Broadcast</span>
                    <span className="subnet-item-val">{subnetMap[selectedCidr].bcast}</span>
                  </div>
                </div>
              </div>

              <div className="project-tags-unboxed">
                <span>Networking</span>
                <span aria-hidden="true">·</span>
                <span>IPv4 Subnets</span>
                <span aria-hidden="true">·</span>
                <span>CIDR</span>
                <span aria-hidden="true">·</span>
                <span>React</span>
              </div>
            </div>

            <div className="project-card-footer">
              <span className="project-type-label">Lab Tool</span>
              <a
                className="project-link-action"
                href="https://github.com/llacuna750"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          {/* Card 2: Network Port & Latency Diagnostic Sim */}
          <article className="project-card">
            <div className="project-card-header">
              <div>
                <div className="project-category-kicker">Systems Diagnostic</div>
                <div className="project-type-label">TCP/IP Port Prober</div>
              </div>
              <span className="simulator-badge">Simulator</span>
            </div>

            <div className="project-card-body">
              <h3 className="project-card-title">{projectsData[1].title}</h3>
              <p className="project-card-summary">{projectsData[1].summary}</p>

              {/* Latency Prober Live Tool */}
              <div className="project-simulator-box">
                <div className="simulator-title">
                  <span>Diagnostic Prober</span>
                  <span className="simulator-badge">Target: 192.168.1.1</span>
                </div>

                <div className="ping-status-list">
                  {pingResults.map((item) => (
                    <div className="ping-item" key={item.service}>
                      <span className="ping-port">{item.service}</span>
                      <span className="ping-val">{item.latency} ({item.status})</span>
                    </div>
                  ))}
                </div>

                <button
                  className="ping-btn"
                  onClick={runDiagnosticPing}
                  disabled={pingRunning}
                >
                  {pingRunning ? 'Probing Ports...' : '⚡ Run Diagnostic Ping'}
                </button>
              </div>

              <div className="project-tags-unboxed">
                <span>TCP/IP</span>
                <span aria-hidden="true">·</span>
                <span>Port Mapping</span>
                <span aria-hidden="true">·</span>
                <span>ICMP</span>
                <span aria-hidden="true">·</span>
                <span>Diagnostics</span>
              </div>
            </div>

            <div className="project-card-footer">
              <span className="project-type-label">Systems Sim</span>
              <a
                className="project-link-action"
                href="https://github.com/llacuna750"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          {/* Card 3: OSI & Systems Knowledge Lab */}
          <article className="project-card">
            <div className="project-card-header">
              <div>
                <div className="project-category-kicker">Architecture Lab</div>
                <div className="project-type-label">Protocols & Reference</div>
              </div>
              <span className="simulator-badge">Interactive</span>
            </div>

            <div className="project-card-body">
              <h3 className="project-card-title">{projectsData[2].title}</h3>
              <p className="project-card-summary">{projectsData[2].summary}</p>

              {/* OSI Layer Live Reference */}
              <div className="project-simulator-box">
                <div className="simulator-title">
                  <span>OSI Protocol Layer Inspector</span>
                  <span className="simulator-badge">7-Layer Model</span>
                </div>

                <div className="osi-layer-pill-row">
                  {Object.keys(osiData).map((layer) => (
                    <button
                      key={layer}
                      className={`osi-pill ${selectedOsi === layer ? 'active' : ''}`}
                      onClick={() => setSelectedOsi(layer)}
                    >
                      {layer}
                    </button>
                  ))}
                </div>

                <div className="osi-layer-card">
                  <strong>{osiData[selectedOsi].name}</strong>
                  <div style={{ margin: '4px 0', color: 'var(--text-muted)' }}>
                    PDU: <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>{osiData[selectedOsi].pdu}</span>
                    {' · '}
                    Protocols: <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--blue-primary)' }}>{osiData[selectedOsi].protocols}</span>
                  </div>
                  <div>{osiData[selectedOsi].desc}</div>
                </div>
              </div>

              <div className="project-tags-unboxed">
                <span>OSI Model</span>
                <span aria-hidden="true">·</span>
                <span>Linux CLI</span>
                <span aria-hidden="true">·</span>
                <span>Java OOP</span>
                <span aria-hidden="true">·</span>
                <span>Notes</span>
              </div>
            </div>

            <div className="project-card-footer">
              <span className="project-type-label">Study Lab</span>
              <a
                className="project-link-action"
                href="https://github.com/llacuna750"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
