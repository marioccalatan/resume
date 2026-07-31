import { Suspense, lazy } from "react"
import Reveal from "../components/Reveal"
import { StaggerGroup, StaggerItem } from "../components/Stagger"
import TiltCard from "../components/TiltCard"

const HeroCanvas = lazy(() => import("../components/HeroCanvas"))

function HomePage() {
    const base = import.meta.env.BASE_URL
  return (
    <main className="wrap">
      <TiltCard className="card hero-card">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
        <div className="home-hero">
          <img
            src={`${base}assets/mario.png`}
            alt="Mario C. Calatan"
            className="home-photo"
          />
          <div>
            <h1>Mario C. Calatan</h1>
            <p className="role">
              Utility Systems Engineer • GIS & SCADA Specialist • Smart Grid & Web GIS Developer
            </p>

            <p className="meta">
              Benguet, Philippines · <a href="tel:+639178778099">+63 917 877 8099</a> ·{" "}
              <a href="mailto:marioccalatan@gmail.com">marioccalatan@gmail.com</a>
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
          </div>
        </div>


        <h2>Professional Summary</h2>
        <p>
          Electrical Engineer with over a decade of experience in electric distribution utilities,
          focused on Smart Grid modernization, SCADA/GIS integration, AMI initiatives, and utility
          digital transformation. Proven in leading cross-functional technical teams, delivering
          modernization roadmaps, and building data-driven systems that improve reliability,
          safety, compliance, and operational decision-making.
        </p>
      </TiltCard>

      <Reveal as="section" className="card">
        <h2>Core Skills</h2>
        <StaggerGroup className="skills-list">
          <StaggerItem><strong>Electric Distribution Planning & Design</strong> – Power system planning, network design, and optimization</StaggerItem>
          <StaggerItem><strong>Smart Grid & SCADA Systems</strong> – DNP3, Modbus, real-time monitoring and control</StaggerItem>
          <StaggerItem><strong>GIS & Network Modeling</strong> – QGIS, PostGIS, spatial analysis and visualization</StaggerItem>
          <StaggerItem><strong>Web & Utility Systems Development</strong> – PHP, Python, JavaScript, React, Node.js, full-stack applications</StaggerItem>
          <StaggerItem><strong>AI & Automation Tools</strong> – Copilot, GPT, Claude, Base44 for code generation and problem-solving</StaggerItem>
          <StaggerItem><strong>Databases</strong> – PostgreSQL, MySQL, Oracle, MS SQL Server, data architecture and optimization</StaggerItem>
          <StaggerItem><strong>Facebook Marketing</strong> – Social media campaigns, audience targeting, analytics, and digital engagement strategies</StaggerItem>
        </StaggerGroup>
      </Reveal>

      <Reveal as="section" className="card">
        <h2>Software Tools Skills</h2>
        <StaggerGroup className="skills-list">
          <StaggerItem><strong>Productivity Tools</strong> - Microsoft Office (Word, Excel, PowerPoint)</StaggerItem>
          <StaggerItem><strong>Drawing Tools</strong> - AutoCAD, SketchUp, Canva</StaggerItem>
          <StaggerItem><strong>Smart Grid Tools</strong> - Survalent, QEI, SEL</StaggerItem>
          <StaggerItem><strong>Planning Tools</strong> - Synergi Electric, ETAP, PVSyst</StaggerItem>
        </StaggerGroup>
      </Reveal>

      <Reveal as="section" className="card">
        <h2>Engineering Skills</h2>
        <StaggerGroup className="skills-list">
          <StaggerItem><strong>System Modeling and Studies</strong> - Fault studies, load flow studies, arc flash analysis, and protection coordination studies</StaggerItem>
          <StaggerItem><strong>Relay and Protection Systems</strong> - Hands-on work with protection relays and equipment from ABB, GE, SEL, G&amp;W, and Eaton for coordination, testing support, and operational reliability</StaggerItem>
          <StaggerItem><strong>Testing and Commissioning Support</strong> - Experience in transformer testing, insulation power factor testing, relay testing, meter accuracy testing, and CT/PT testing</StaggerItem>
          <StaggerItem><strong>LV and MV Network Engineering</strong> - Planning, design review, and technical validation for LV distribution and MV networks up to 23kV</StaggerItem>
          <StaggerItem><strong>23kV Line Activities</strong> - Feeder load balancing, voltage profile improvement, reconductoring assessment, sectionalizing and switching plan preparation, and line extension evaluation</StaggerItem>
          <StaggerItem><strong>Protection and Reliability Improvement</strong> - Relay and recloser coordination support, fault isolation strategy, and reliability performance analysis</StaggerItem>
          <StaggerItem><strong>Asset and Capacity Planning</strong> - Transformer loading assessment, feeder capacity checks, and prioritization of reinforcement projects</StaggerItem>
          <StaggerItem><strong>Field and Technical Operations Support</strong> - Site validation, technical inspection review, and engineering support for construction and maintenance activities</StaggerItem>
        </StaggerGroup>
      </Reveal>

      <Reveal as="section" className="card">
        <h2>Administrative Skills</h2>
        <StaggerGroup className="skills-list">
          <StaggerItem><strong>CAPEX and OPEX Preparation</strong> - Development, justification, and monitoring of annual and multi-year budget requirements</StaggerItem>
          <StaggerItem><strong>Stakeholder Coordination</strong> - Collaboration with internal teams, regulators, suppliers, and community stakeholders for project execution</StaggerItem>
          <StaggerItem><strong>Bids and Awards Technical Leadership</strong> - Technical Working Group Chairman for BAC, leading technical specifications review, bid evaluations, and recommendation reports</StaggerItem>
          <StaggerItem><strong>Project Documentation and Reporting</strong> - Preparation of technical reports, project updates, compliance documentation, and management presentations</StaggerItem>
          <StaggerItem><strong>Procurement and Resource Planning</strong> - Specification support, material requirement planning, and coordination of manpower and equipment needs</StaggerItem>
          <StaggerItem><strong>Policy and Compliance Alignment</strong> - Support for ISO/IMS/AMS-aligned processes, audit readiness, and implementation governance</StaggerItem>
          <StaggerItem><strong>Team Leadership and Work Planning</strong> - Task delegation, performance monitoring, mentoring, and cross-functional schedule management</StaggerItem>
        </StaggerGroup>
      </Reveal>

      <footer className="footer">
        © {new Date().getFullYear()} Mario C. Calatan
      </footer>
    </main>
  )
}
export default HomePage
