import React from 'react';
import { RESUME_DATA } from '../data';

const ProjectList = ({ onOpenModal }) => {
  const sortedProjects = RESUME_DATA.projects
    .slice() // Gumawa ng kopya
    .sort((a, b) => {
        // --- 1. Custom Logic: Unahin ang "Present" Projects ---
        
        const isAPresent = a.endDate === "Present";
        const isBPresent = b.endDate === "Present";

        // Kung parehong Present: i-sort sila by date
        if (isAPresent && isBPresent) {
            // Kung Present pareho, gamitin ang start date (Descending)
            return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
        }

        // Kung A lang ang Present: Una si A (return -1)
        if (isAPresent) {
            return -1;
        }

        // Kung B lang ang Present: Una si B (return 1)
        if (isBPresent) {
            return 1;
        }

        // --- 2. Standard Sorting (Descending by Start Date) ---
        // Kung walang Present, i-sort sila by date (pinakabago muna)
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);

        return dateB.getTime() - dateA.getTime();
    });
  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>
      {sortedProjects.map((project) => (
        <div className="experience-item" key={project.id}>
          <div className="item-header">
            <h3 className="item-title">{project.title}</h3>
          </div>
          <div className="item-header">
            <span className="item-date">{project.subtitle}</span>
          </div>
          <div className="item-company">{project.company}</div>
          <div className="item-description">
            <ul>
              {project.summaryPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <button
              className="view-project-btn"
              onClick={() => onOpenModal(project)}
            >
              <span className="view-icon">👁️</span>
              <span>View Project Details</span>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectList;