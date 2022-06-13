import React from 'react'

const SkillCircle = ({ skill, percentage }) => {
  return <>
    <div className="skill-container">
      <div className="skill-name">{skill}</div>
      <div className="skill-percentage">{percentage}%</div>
    </div>
  </>
}

export default SkillCircle