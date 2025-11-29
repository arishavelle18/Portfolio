import React from 'react';

const Experience = () => {
  return (
    <section className="section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-item">
        <div className="item-header">
          <h3 className="item-title">Junior Software Developer</h3>
          <span className="item-date">Sept 2023 - Present</span>
        </div>
        <div className="item-company">Blackfort Consulting Inc.</div>
        <div className="item-description">
          <p className="deployment-note">
            Deployed to Cebu Pacific Air (July 2024 – Present)
          </p>
          <ul>
            <li>Led backend enhancements, API gateway transitions, and application optimizations for multiple enterprise software projects</li>
            <li>Converted ASP.NET APIs to Apigee and conducted thorough endpoint testing</li>
            <li>Addressed SonarQube issues through effective code refactoring</li>
            <li>Developed and maintained APIs using C# with Minimal API and Apigee, following clean architecture and vertical slice pattern</li>
            <li>Applied Database-First approach in various projects, ensuring accurate data modeling</li>
            <li>Integrated backend services into mobile and web platforms</li>
            <li>Built and mimicked front-end layouts using Telerik Blazor based on UI/UX design specs</li>
            <li>Performed bug fixing, smoke testing, and collaborated with QA to ensure code quality</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;