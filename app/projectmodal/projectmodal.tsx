import React, { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    // Lock scroll only when modal is truly active/visible
    if (project) {
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  const { title, subtitle, modalData } = project;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>×</button>
          <h2 className="modal-title">{title}</h2>
          <p className="modal-subtitle">{subtitle}</p>
        </div>
        <div className="modal-body">
         <div className="project-screenshot">
            {/* I-check kung may imageUrl bago mag-render */}
            {modalData.screenshotText ? (
              <img 
                src={modalData.screenshotText} 
                alt={`${title} Screenshot`} 
                className="project-image" 
              />
            ) : (
              /* Optional: Fallback kung walang image path */
              <div className="image-placeholder">Image Not Found</div>
            )}
          </div>

          <div className="tech-stack-container">
            <h3 className="section-heading">Tech Stack</h3>
            {modalData.techStack.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>

          <h3 className="section-heading">Key Features</h3>
          <ul className="project-feature-list">
            {modalData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h3 className="section-heading">Technical Highlights</h3>
          <ul className="project-feature-list">
            {modalData.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;