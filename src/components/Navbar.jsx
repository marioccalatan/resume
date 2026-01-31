import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
    const base = import.meta.env.BASE_URL
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="topbar">
      <div className="wrap nav">
        <div className="brand">Mario C. Calatan</div>

        {/* Hamburger (shows only on mobile via CSS) */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          ☰
        </button>

        {/* Desktop nav */}
        <nav className="nav-desktop">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/experience">Professional Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>

          <a href="https://www.linkedin.com/in/marioccalatan/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/marioccalatan" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <NavLink to="/contact">Contact</NavLink>

          <a href={`${base}assets/Mario_Calatan_Full_Resume.pdf`}  download>
            Resume (PDF)
          </a>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`nav-mobile ${open ? "open" : ""}`}>
        <div className="wrap">
          <nav className="nav-mobile-links">
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
            <NavLink to="/education" onClick={closeMenu}>Education</NavLink>
            <NavLink to="/experience" onClick={closeMenu}>Professional Experience</NavLink>
            <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

            <a
              href="https://www.linkedin.com/in/marioccalatan/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/marioccalatan"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              GitHub
            </a>

            <a
              href="/assets/Mario_Calatan_Full_Resume.pdf"
              download
              onClick={closeMenu}
            >
              Resume (PDF)
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
