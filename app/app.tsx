import React, { useState } from "react";
import "./App.css";

// Components
import Navbar from "./navbar/navbar";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import Experience from "./experience/experience";
import ProjectList from "./projectlist/projectlist";
import ProjectModal from "./projectmodal/projectmodal";


function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="resume-container">
      <Navbar />
      <Header /> {/* header already exists; see header.tsx change for id */}
      <div className="resume-body">
        <Sidebar />
        <main className="main-content">
          <div id="summary"></div>
          <br />
           <br />
          <section className="section">
            <h2 className="section-title">Professional Summary</h2>
            <p className="summary-text">
              Motivated Junior Software Developer specializing in back-end
              development, web systems, and API integrations. Skilled in
              object-oriented programming, data structures, and modern web
              technologies. Eager to grow in the tech industry by continuously
              improving both technical skills and best practices.
            </p>
          </section>
          <div id="experience"></div>
          <br />
           <br />
          <div>
            <Experience />
          </div>

          <div id="education"></div>
          <br />
           <br />
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="education-item">
              <div className="item-header">
                <h3 className="item-title">Bachelor of Science in Computer Science</h3>
                <span className="item-date">2018 - 2023</span>
              </div>
              <div className="item-company">Technological University of the Philippines</div>
            </div>
          </section>
          <div id="projects"></div>
          <br />
           <br />
          <div>
            <ProjectList onOpenModal={setSelectedProject} />
          </div>
          <div id="tech"></div>
          <br />
           <br />
          <section  className="section">
            <h2 className="section-title">Technical Expertise</h2>
            <div className="item-description">
              <ul>
                <li><strong>Backend:</strong> C#, Minimal API, ASP.NET, Clean Architecture, Vertical Slice Pattern</li>
                <li><strong>Frontend:</strong> .NET Blazor, .Net Maui, ReactJS, Javascript Telerik, HTML, CSS, Bootstrap, jQuery, AJAX</li>
                <li><strong>API Management:</strong> Apigee for API gateway management and integration</li>
                <li><strong>Database:</strong> MySQL, PostgreSQL, SQLite, MongoDb, Navitaire, Database-First approach, data modeling</li>
                <li><strong>DevOps:</strong> Git, GitHub, Azure DevOps, Azure, Heroku, CI/CD pipelines, YAML, Vercel</li>
                <li><strong>Tools:</strong> SonarQube for code quality, QA collaboration</li>
              </ul>
            </div>
          </section>
        </main>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;