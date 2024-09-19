import React from 'react';
import SkillItem from './SkillItem';
import { FaJava, FaReact, FaDatabase, FaJs, FaCss3Alt, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiHtml5 } from 'react-icons/si';

const skillsData = [
  { name: 'Java', icon: <FaJava className="text-6xl" style={{ color: '#007396' }} /> },  // Java - Blue-green
  { name: 'React', icon: <FaReact className="text-6xl" style={{ color: '#61DBFB' }} /> },  // React - Light blue
  { name: 'SQL', icon: <FaDatabase className="text-6xl" style={{ color: '#336791' }} /> },  // SQL - Blue-gray
  { name: 'JavaScript', icon: <FaJs className="text-6xl" style={{ color: '#F7DF1E' }} /> },  // JavaScript - Yellow
  { name: 'TypeScript', icon: <SiTypescript className="text-6xl" style={{ color: '#3178C6' }} /> },  // TypeScript - Blue
  { name: 'CSS/HTML', icon: <FaCss3Alt className="text-6xl" style={{ color: '#1572B6' }} />, extra: <SiHtml5 className="text-6xl" style={{ color: '#E34F26' }} /> },  // CSS - Blue, HTML - Orange
  { name: 'Angular', icon: <FaAngular className="text-6xl" style={{ color: '#DD1B16' }} /> }  // Angular - Red
];

const Skills = () => {
  return (
    <section className="mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
      <div className="flex justify-center flex-wrap space-x-4">
        {skillsData.map(skill => (
          <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
