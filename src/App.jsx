import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import HomePage from "./pages/HomePage"
import EducationPage from "./pages/EducationPage"
import ExperiencePage from "./pages/ExperiencePage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
