import { useState } from "react"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

function NavItem({ to, end, onClick, layoutId, children }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
    >
      {({ isActive }) => (
        <>
          {children}
          {isActive && (
            <motion.span
              className="nav-underline"
              layoutId={layoutId}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            />
          )}
        </>
      )}
    </NavLink>
  )
}

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
          <NavItem to="/" end layoutId="nav-pill-desktop">Home</NavItem>
          <NavItem to="/education" layoutId="nav-pill-desktop">Education</NavItem>
          <NavItem to="/experience" layoutId="nav-pill-desktop">Professional Experience</NavItem>
          <NavItem to="/projects" layoutId="nav-pill-desktop">Projects</NavItem>

          <a href="https://www.linkedin.com/in/marioccalatan/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <NavItem to="/contact" layoutId="nav-pill-desktop">Contact</NavItem>

          <a href={`${base}assets/Mario_Calatan_Full_Resume.pdf`}  download>
            Resume (PDF)
          </a>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="wrap">
              <nav className="nav-mobile-links">
                <NavItem to="/" end onClick={closeMenu} layoutId="nav-pill-mobile">Home</NavItem>
                <NavItem to="/education" onClick={closeMenu} layoutId="nav-pill-mobile">Education</NavItem>
                <NavItem to="/experience" onClick={closeMenu} layoutId="nav-pill-mobile">Professional Experience</NavItem>
                <NavItem to="/projects" onClick={closeMenu} layoutId="nav-pill-mobile">Projects</NavItem>
                <NavItem to="/contact" onClick={closeMenu} layoutId="nav-pill-mobile">Contact</NavItem>

                <a
                  href="https://www.linkedin.com/in/marioccalatan/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                >
                  LinkedIn
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
