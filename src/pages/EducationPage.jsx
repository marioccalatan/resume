import Reveal from "../components/Reveal"

function EducationPage() {
  return (
    <main className="wrap">
      <Reveal as="section" className="card">
        <h1>Education</h1>

        <table className="edu-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>School</th>
              <th>Location</th>
              <th>Year</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Elementary</td>
              <td>Kiwas Elementary School</td>
              <td>Tadiangan, Tuba, Benguet</td>
              <td>1996 – 2002</td>
            </tr>
            <tr>
              <td>High School</td>
              <td>Pines City National High School</td>
              <td>Palma St., Baguio City</td>
              <td>2002 – 2006</td>
            </tr>
            <tr>
              <td>College</td>
              <td>
                Bachelor of Science in Electrical Engineering
                <br />
                Saint Louis University
              </td>
              <td>Bonifacio St., Baguio City</td>
              <td>2006 – 2011</td>
            </tr>
            <tr>
              <td>Post Graduate</td>
              <td>
                Master in Urban Management
                <br />
                Benguet State University
              </td>
              <td>La Trinidad, Benguet</td>
              <td>2018 – 2020</td>
            </tr>
          </tbody>
        </table>

        <h2 style={{ marginTop: 28 }}>Trainings & Seminars</h2>

        <div className="training">
          <h3>CPD 1 – Power System Modeling (Competency Training)</h3>
          <p className="org">University of the Philippines</p>
          <p>
            Trained in creating an Excel-based distribution network database modeled on a per-feeder basis,
            from feeder source down to customer meters. The model is used for <b>System Loss Segregation</b>,
            enabling identification of network components with high system loss and prioritization of projects
            to reduce losses and improve overall system efficiency.
          </p>
        </div>

        <div className="training">
          <h3>CPD 2 – Capital Expenditure (CAPEX) Preparation</h3>
          <p className="org">University of the Philippines</p>
          <p>
            Training focused on preparation and evaluation of CAPEX proposals for submission to the{" "}
            <b>Energy Regulatory Commission (ERC)</b>, including technical justification, financial analysis,
            and compliance with regulatory requirements for rate approval.
          </p>
        </div>

        <p className="muted small">(Additional trainings and seminars to be added)</p>
      </Reveal>

      <footer className="footer">
        © {new Date().getFullYear()} Mario C. Calatan
      </footer>
    </main>
  )
}

export default EducationPage
