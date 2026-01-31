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

      <footer className="footer">
        © {new Date().getFullYear()} Mario C. Calatan
      </footer>
    </main>
  )
}

export default ProjectsPage
