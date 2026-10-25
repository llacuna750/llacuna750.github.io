function Footer({ isProjectPage = false }) {
  const homeHref = isProjectPage ? '/' : '#top'

  return (
    <footer className="site-footer">
      <div className="section-wrap footer-content">
        <span>&copy; {new Date().getFullYear()} Gabriel Llacuna</span>
        <a href={homeHref}>{isProjectPage ? 'Portfolio home' : 'Top'}</a>
      </div>
    </footer>
  )
}

export default Footer
