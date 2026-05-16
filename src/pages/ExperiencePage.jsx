function ExperiencePage() {
  return (
    <main className="wrap">
      <section className="card">
        <h1>Professional Experience</h1>
        <p className="meta">
          Experience aligned with Smart Grid modernization, ADMS/AMI integration, utility R&D, and
          cross-functional engineering leadership.
        </p>

        <div className="timeline">
          <div className="item">
            <span className="year">2024 – Present</span>
            <h3>System Planning and Design Officer — BENECO</h3>
            <p>
              Lead system planning and design initiatives, managing engineering teams responsible for
              line inspections, CAPEX/OPEX planning, customer technical evaluations, GIS, forecasting,
              and long-term distribution development.
            </p>
            <p>
              Coordinate technical discussions across departments to align modernization priorities,
              evaluate pilot opportunities, and support roadmap development for digital utility systems
              and automation-ready network operations.
            </p>
          </div>

          <div className="item">
            <span className="year">2020 – 2024</span>
            <h3>Special Equipment and Metering Officer — BENECO</h3>
            <p>
              Led quality testing and technical evaluation of critical utility assets including line
              hardware, distribution transformers, instrument transformers, and power transformers.
              Developed a web-based calibration monitoring system to improve compliance tracking and
              audit readiness of special equipment.
            </p>
            <p>
              Implemented AMI/AMR initiatives through POC, pilot, and rollout phases, and developed
              utility systems for Meter Data Management, installation/replacement workflows, and
              enforcement operations. Supported meter-to-enterprise data integration and reporting
              workflows used for operational analytics and decision support.
            </p>
          </div>

          <div className="item">
            <span className="year">2019 – 2020</span>
            <h3>Construction and Maintenance Officer — BENECO</h3>
            <p>
              Supervised 24/7 construction and maintenance field operations, including emergency response,
              outage-related restoration activities, and safety-focused execution of maintenance programs
              to sustain service reliability.
            </p>
          </div>

          <div className="item">
            <span className="year">2013 – 2019</span>
            <h3>SCADA and GIS Development — BENECO</h3>
            <p>
              Spearheaded SCADA modernization to support integration with OMS and DMS functions,
              establishing the foundation for ADMS-aligned operations and improved grid visibility.
              Led GIS modernization in parallel to ensure accurate network models, outage mapping,
              and data consistency for planning and operations.
            </p>
          </div>

          <div className="item">
            <span className="year">2011 – 2012</span>
            <h3>GIS Engineer — BENECO</h3>
            <p>
              Maintained and enhanced GIS datasets of the distribution network to support planning,
              operations, reporting, and data-driven utility decision-making.
            </p>
          </div>
        </div>

        <h2>Role Alignment Highlights</h2>
        <ul className="bullets">
          <li>Facilitated cross-functional technical coordination for Smart Grid and digital utility initiatives.</li>
          <li>Contributed to AMI deployment strategy from pilot validation through operational rollout.</li>
          <li>Led SCADA and GIS modernization efforts that support OMS/DMS integration and ADMS readiness.</li>
          <li>Built engineering web systems and repositories to strengthen data governance and process automation.</li>
          <li>Served as Technical Working Group Chairman for the Bids and Awards Committee, leading technical evaluations and bid review recommendations.</li>
          <li>Performed and supervised technical testing activities including transformer tests, insulation power factor tests, relay tests, meter accuracy tests, and CT/PT tests.</li>
          <li>Applied project planning and resource management for materials, manpower, and implementation timelines.</li>
          <li>Supported technical compliance through calibration controls, structured reporting, and audit-ready records.</li>
        </ul>

        <h2>Skills</h2>
        <ul className="skills-list">
          <li><strong>Smart Grid Architecture and Integration</strong> - AMI/AMR, SCADA, OMS, DMS, and ADMS readiness</li>
          <li><strong>Technical Working Group Leadership</strong> - Cross-functional facilitation, stakeholder coordination, and policy support</li>
          <li><strong>Grid Modernization Program Management</strong> - Pilot design, rollout execution, and utility project governance</li>
          <li><strong>Business Analytics for Utility Operations</strong> - Grid data interpretation, reporting, and operational insight generation</li>
          <li><strong>R&D and Technology Validation</strong> - POC execution, framework evaluation, and implementation audit support</li>
          <li><strong>Regulatory and Management System Compliance</strong> - Structured documentation, calibration controls, and audit readiness</li>
        </ul>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Mario C. Calatan
      </footer>
    </main>
  )
}

export default ExperiencePage
