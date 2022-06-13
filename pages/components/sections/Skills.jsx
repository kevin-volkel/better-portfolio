import React from 'react'
import SkillCircle from '../layout/SkillCircle'

const Skills = () => {
  return <div className="skills-container">
    <div className="section-title">Skills</div>
    <SkillCircle skill="html" percentage={95}/>
  </div>
}

export default Skills