function ProjectsPage() {
  const base = import.meta.env.BASE_URL

  return (
    <main className="wrap">
      <section className="card">
        <h1>Projects</h1>
        <p className="meta">
          Selected utility modernization projects covering SCADA, GIS, and operational systems.
        </p>
      </section>

      {/* SCADA PROJECT */}
      <section className="card project">
        <div className="project-head">
          <div>
            <h2>SCADA Modernization & Substation Modeling</h2>
            <p className="project-meta">
              Technology: Survalent SCADA • DNP3 over TCP/IP • Substation SLD modeling
            </p>
          </div>
          <span className="tag">SCADA</span>
        </div>

        <p>
          Led the development of substation models for six (6) substations using detailed
          single-line diagrams (SLDs), incorporating protection devices, switching elements,
          and operational interlocks to support reliable monitoring and control. Established
          DNP3 communication over TCP/IP for field device integration, enabling scalable expansion
          for future phases such as Outage Management System (OMS) and Distribution Management System (DMS) readiness.
        </p>

        <div className="gallery">
          <figure className="shot">
            <img src={`${base}assets/projects/scada/scada-01.jpg`} alt="SCADA Project Photo 1" />
            <figcaption>SCADA/Control Room</figcaption>
          </figure>

          <figure className="shot">
            <img src={`${base}assets/projects/scada/scada-02.jpg`} alt="SCADA Project Photo 2" />
            <figcaption>Presentation of SCADA in Florida USA</figcaption>
          </figure>

          <figure className="shot">
            <img src={`${base}assets/projects/scada/scada-03.jpg`} alt="SCADA Project Photo 3" />
            <figcaption>Sample SLD SCADA</figcaption>
          </figure>
        </div>
      </section>

      {/* GIS PROJECT */}
      <section className="card project">
        <div className="project-head">
          <div>
            <h2>Utility GIS Development & Network Data Modernization</h2>
            <p className="project-meta">
              Tools: AutoCAD • ArcView • ArcMap • QGIS (Quantum GIS) • Web GIS • PostGIS • Network Topology • Outage Mapping
            </p>
          </div>
          <span className="tag">GIS</span>
        </div>

        <p>
          Spearheaded the evolution of the utility GIS program from CAD-based drawings
          through ESRI platforms (ArcView / ArcMap) and later migration to QGIS.
          Coordinated large-scale field data gathering and network updates, supporting
          accurate asset mapping for planning, operations, and system expansion.
          Managed and guided a team of approximately twenty (20) engineers dedicated to
          data collection, validation, and continuous GIS dataset improvement.
        </p>

        <div className="gallery">
          <figure className="shot">
            <img src={`${base}assets/projects/gis/gis-01.jpg`} alt="GIS Project Photo 1" />
            <figcaption>Distribution network mapping</figcaption>
          </figure>

          <figure className="shot">
            <img src={`${base}assets/projects/gis/gis-02.jpg`} alt="GIS Project Photo 2" />
            <figcaption>Web GIS using PostGIS and OpenLayers</figcaption>
          </figure>

          <figure className="shot">
            <img src={`${base}assets/projects/gis/gis-03.jpg`} alt="GIS Project Photo 3" />
            <figcaption>GIS with outage map using network topology</figcaption>
          </figure>
        </div>
      </section>

      {/* WEBDEV PROJECT */}
      <section className="card project">
        <div className="project-head">
          <div>
            <h2>Utility Web Developments — Network Enterprise System</h2>
            <p className="project-meta">
              Tools: React • Node.js • GitHub Copilot (VS Code) • PostgreSQL
            </p>
          </div>
          <span className="tag">Web Dev</span>
        </div>

        <p>
          Developed an all-in-one web-based engineering platform called the{' '}
          <strong>Network Enterprise System</strong>, built using React and Node.js
          with the aid of GitHub Copilot in VS Code. The system consolidates multiple
          engineering functions into a single integrated application for the utility's
          engineering department.
        </p>

        <ul className="bullets">
          <li><strong>GIS</strong> — Interactive utility network mapping and spatial analysis</li>
          <li><strong>Network Management System</strong> — Real-time network monitoring and control workflows</li>
          <li><strong>Compliance Reporting System</strong> — Automated generation of regulatory compliance reports</li>
          <li><strong>Technical Data Repository</strong> — Centralized store for engineering documents and records</li>
          <li><strong>Transformer Management System</strong> — Asset tracking and maintenance scheduling for transformers</li>
          <li><strong>Calibration Management System</strong> — Instrument calibration records and due-date tracking</li>
          <li><strong>Meter Data Management System</strong> — Meter asset registry, readings, and data validation</li>
          <li><strong>Network Reference Center</strong> — Reference library for standards, drawings, and technical specifications</li>
        </ul>

        <div className="gallery">
          {[
            { file: 'webdev-01.png', caption: 'Dashboard / Overview' },
            { file: 'webdev-02.png', caption: 'GIS Module' },
            { file: 'webdev-03.png', caption: 'Network Management System' },
            { file: 'webdev-04.png', caption: 'Compliance Reporting System' },
            { file: 'webdev-05.png', caption: 'Technical Data Repository' },
            { file: 'webdev-06.png', caption: 'Transformer Management System' },
            { file: 'webdev-07.png', caption: 'Calibration Management System' },
            { file: 'webdev-08.png', caption: 'Meter Data Management System' },
            { file: 'webdev-09.png', caption: 'Network Reference Center' },
          ].map(({ file, caption }) => (
            <figure key={file} className="shot">
              <img
                src={`${base}assets/projects/webdev/${file}`}
                alt={caption}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = `data:image/svg+xml,${encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180">` +
                    `<rect width="100%" height="100%" fill="#1a1e27"/>` +
                    `<text x="50%" y="38%" fill="#a7b0bf" font-family="system-ui" font-size="13" text-anchor="middle" dominant-baseline="middle">${file}</text>` +
                    `<text x="50%" y="58%" fill="#67d4ff" font-family="system-ui" font-size="11" text-anchor="middle" dominant-baseline="middle">Add screenshot here</text>` +
                    `</svg>`
                  )}`;
                }}
              />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Mario C. Calatan
      </footer>
    </main>
  )
}

export default ProjectsPage
