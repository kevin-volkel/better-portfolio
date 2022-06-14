import React from 'react'
import SkillCircle from '../layout/SkillCircle'

const Skills = () => {
  return <div className="skills-container">
    <div className="section-title">Skills</div>
    <SkillCircle skill="html" percentage={95}/>
    <SkillCircle skill="css" percentage={75}/>
    <SkillCircle skill="js" percentage={85}/>
    <SkillCircle skill="next" percentage={65}/>
    <SkillCircle skill="scss" percentage={70}/>
    <SkillCircle skill="DB" percentage={85}/>
  </div>
}

export default Skills