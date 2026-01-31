function ExperiencePage() {
  return (
    <main className="wrap">
      <section className="card">
        <h1>Professional Experience</h1>

        <div className="timeline">
          <div className="item">
            <span className="year">2024 – Present</span>
            <h3>System Planning and Design Officer — BENECO</h3>
            <p>
              Leading system planning and design, managing engineers responsible for line inspections,
              CAPEX and OPEX planning, customer-related technical requests, research, GIS, forecasting,
              and organization-wide distribution planning.
            </p>
          </div>

          <div className="item">
            <span className="year">2020 – 2024</span>
            <h3>Special Equipment and Metering Officer — BENECO</h3>
            <p>
              Led quality testing and evaluation of line hardware (poles, crossarms, bolts, conductors),
              distribution transformers, instrument transformers, and power transformers. Built a web app
              to monitor calibration of special equipment.
            </p>
            <p>
              Implemented AMI/AMR programs and built PHP/MySQL web systems including Meter Data Management,
              Meter Installation Management, Meter Replacement, and Apprehension Management systems.
              Participated in POC, pilot, and rollout initiatives for AMI.
            </p>
          </div>

          <div className="item">
            <span className="year">2019 – 2020</span>
            <h3>Construction and Maintenance Officer — BENECO</h3>
            <p>
              Assigned to Construction and Maintenance Office, overseeing 24/7 linemen operations,
              emergency response coordination, and maintenance execution for reliable service continuity.
            </p>
          </div>

          <div className="item">
            <span className="year">2013 – 2019</span>
            <h3>SCADA and GIS Development — BENECO</h3>
            <p>
              Tasked to overhaul the existing SCADA system to enable integration of OMS and DMS
              (Outage Management System / Distribution Management System). In the process, the
              organization’s GIS was also modernized and improved to support the next phases of
              operational technology and planning.
            </p>
          </div>

          <div className="item">
            <span className="year">2011 – 2012</span>
            <h3>GIS Engineer — BENECO</h3>
            <p>
              Updated and maintained GIS maps of the distribution network to support planning,
              operations, and reporting.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Mario C. Calatan
      </footer>
    </main>
  )
}

export default ExperiencePage
