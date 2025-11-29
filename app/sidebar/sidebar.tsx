import React from 'react';
import { RESUME_DATA } from '../data';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="section">
        <h2 className="section-title">Skills</h2>
        {RESUME_DATA.skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="section">
        <h2 className="section-title">Continuous Learning</h2>
        {RESUME_DATA.learning.map((learn, index) => (
          <div className="learning-box" key={index}>
            {learn}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;