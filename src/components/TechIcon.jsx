function TechIcon({ type }) {
  switch (type) {
    case 'html':
      return (
        <svg className="tech-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path fill="#e44d26" d="M5 3h22l-2 23-9 3-9-3z" />
          <path fill="#f16529" d="M16 5h8l-1.7 19L16 26z" />
          <path fill="#fff" d="M9 8h14l-.4 3H12l.2 2h9.8l-.8 8-5.2 1.8-5.3-1.8-.4-4h3l.2 1.7 2.6.8 2.7-.8.3-2.8h-8.1z" />
        </svg>
      )
    case 'css':
      return (
        <svg className="tech-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path fill="#1572b6" d="M5 3h22l-2 23-9 3-9-3z" />
          <path fill="#33a9dc" d="M16 5h8l-1.7 19L16 26z" />
          <path fill="#fff" d="M10 8h13l-.4 3H13l.2 2h9.3l-.8 8-5.2 1.8-5.2-1.8-.4-4h3l.2 1.7 2.5.8 2.7-.8.3-2.8h-8z" />
        </svg>
      )
    case 'javascript':
      return (
        <svg className="tech-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path fill="#f7df1e" d="M3 3h26v26H3z" />
          <path fill="#242424" d="M20.2 22.2c.5.8 1.1 1.3 2.2 1.3.9 0 1.4-.4 1.4-1 0-.7-.5-1-1.6-1.5l-.6-.2c-1.8-.8-3-1.7-3-3.8 0-1.9 1.5-3.4 3.9-3.4 1.7 0 3 .6 3.8 2.1l-2.1 1.4c-.5-.8-.9-1.1-1.7-1.1-.7 0-1.1.4-1.1.9 0 .6.4.9 1.4 1.3l.6.2c2.2.9 3.4 1.8 3.4 3.9 0 2.3-1.8 3.6-4.3 3.6-2.4 0-4-.9-4.8-2.6zm-8.5.2c.4.7.8 1.2 1.7 1.2.8 0 1.3-.3 1.3-1.5v-8.3h2.8v8.3c0 2.9-1.7 4.2-4 4.2-2.1 0-3.3-1.1-3.9-2.5z" />
        </svg>
      )
    case 'react':
      return (
        <svg className="tech-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <g fill="none" stroke="#61dafb" strokeWidth="1.7">
            <ellipse cx="16" cy="16" rx="13" ry="5" />
            <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" />
            <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
          </g>
          <circle cx="16" cy="16" r="2.4" fill="#61dafb" />
        </svg>
      )
    case 'node':
      return (
        <svg className="tech-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path fill="#68a063" d="m16 2 13 7.4v13.2L16 30 3 22.6V9.4z" />
          <text x="16" y="19.3" fill="#fff" fontSize="7" fontWeight="700" textAnchor="middle">NODE</text>
        </svg>
      )
    case 'express':
      return (
        <svg className="tech-icon tech-icon-express" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <text x="16" y="23" fill="currentColor" fontFamily="Arial, sans-serif" fontSize="24" fontStyle="italic" fontWeight="700" textAnchor="middle">ex</text>
        </svg>
      )
    case 'mysql':
      return (
        <svg className="tech-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path fill="#4479a1" d="M5 7c0-2.2 4.9-4 11-4s11 1.8 11 4v16c0 2.2-4.9 4-11 4S5 25.2 5 23z" />
          <ellipse cx="16" cy="7" rx="11" ry="4" fill="#5b9bd5" />
          <path d="M5 13c0 2.2 4.9 4 11 4s11-1.8 11-4M5 19c0 2.2 4.9 4 11 4s11-1.8 11-4" fill="none" stroke="#d9efff" strokeWidth="1.4" />
        </svg>
      )
    default:
      return null
  }
}

export default TechIcon
