function Home() {
  return (
    <main className="wrap">
      <section className="card">
        <h1>Mario C. Calatan</h1>
        <p className="role">
          Utility Systems Engineer • GIS & SCADA Specialist • Smart Grid & Web GIS Developer
        </p>

        <p className="meta">
          Benguet, Philippines · <a href="tel:+639178778099">+63 917 877 8099</a> ·{" "}
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </p>

        <h2>Professional Summary</h2>
        <p>
          Electrical Engineer with more than a decade of experience in electric distribution
          utilities, specializing in GIS, SCADA, Smart Grid systems, and utility data management.
          Strong background in web development, databases, and industrial communication protocols
          (DNP3, Modbus), with proven leadership in system modernization, planning, and enterprise-wide
          implementation.
        </p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Mario C. Calatan · Resume
      </footer>
    </main>
  )
}

export default Home
