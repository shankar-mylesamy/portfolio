import React from "react";
import "./Skills.css";

const SkillComponent = ({ skillName, percentage }) => {
  return (
    <>
      <div id="skill-component">
        <p>{skillName}</p>
        <p>{percentage}</p>
      </div>
      <div className="skill-bar">
        <p style={{ width: percentage }}></p>
      </div>
    </>
  );
};

export function Skills() {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skill-container">
          <h3>Frontend</h3>
          <div className="skill-table">
            <SkillComponent skillName="HTML" percentage="80%" />
            <SkillComponent skillName="CSS" percentage="70%" />
            <SkillComponent skillName="JavaScript" percentage="80%" />
            <SkillComponent skillName="ReactJS" percentage="70%" />
          </div>
        </div>
        <div className="skill-container">
          <h3>Backend</h3>
          <div className="skill-table">
            <SkillComponent skillName="NodeJS" percentage="70%" />
            <SkillComponent skillName="ExpressJS" percentage="70%" />
          </div>
        </div>
        <div className="skill-container">
          <h3>Database</h3>
          <div className="skill-table">
            <SkillComponent skillName="MongoDB" percentage="70%" />
          </div>
        </div>
      </div>
    </div>
  );
}
