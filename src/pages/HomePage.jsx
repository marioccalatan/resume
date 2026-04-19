function HomePage() {
    const base = import.meta.env.BASE_URL
  return (
    <main className="wrap">
      <section className="card">
        <h1>Mario C. Calatan</h1>
        <p className="role">
          Utility Systems Engineer • GIS & SCADA Specialist • Smart Grid & Web GIS Developer
        </p>

        <p className="meta">
          Benguet, Philippines · <a href="tel:+639178778099">+63 917 877 8099</a> ·{" "}
          <a href="mailto:marioccalatan@gmail.com<">marioccalatan@gmail.com</a>
        </p>
        <p style={{ marginTop: 14 }}>
          <a
            href={`${base}assets/Mario_Calatan_Full_Resume.pdf`}
            download
            className="btn"
          >
            📄 Download Resume (PDF)
          </a>
        </p>


        <h2>Professional Summary</h2>
        <p>
          Electrical Engineer with more than a decade of experience in electric distribution
          utilities, specializing in GIS, SCADA, Smart Grid systems, and utility data management.
          Strong background in web development, databases, and industrial communication protocols
          (DNP3, Modbus), with proven leadership in system modernization, planning, and enterprise-wide
          implementation.
        </p>

        <h2>Core Skills</h2>
        <ul className="skills-list">
          <li><strong>Electric Distribution Planning & Design</strong> – Power system planning, network design, and optimization</li>
          <li><strong>Smart Grid & SCADA Systems</strong> – DNP3, Modbus, real-time monitoring and control</li>
          <li><strong>GIS & Network Modeling</strong> – QGIS, PostGIS, spatial analysis and visualization</li>
          <li><strong>Web & Utility Systems Development</strong> – PHP, Python, JavaScript, React, Node.js, full-stack applications</li>
          <li><strong>AI & Automation Tools</strong> – Copilot, GPT, Claude, Base44 for code generation and problem-solving</li>
          <li><strong>Databases</strong> – PostgreSQL, MySQL, Oracle, MS SQL Server, data architecture and optimization</li>
          <li><strong>Facebook Marketing</strong> – Social media campaigns, audience targeting, analytics, and digital engagement strategies</li>
        </ul>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Mario C. Calatan
      </footer>
    </main>
  )
}
export default HomePage
