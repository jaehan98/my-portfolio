import React from 'react';
import SkillItem from './SkillItem';
import { FaJava, FaReact, FaDatabase, FaJs, FaCss3Alt, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiHtml5 } from 'react-icons/si';

const skillsData = [
  { name: 'Java', icon: <FaJava className="text-6xl text-red-600" /> },  // Larger icons for visual effect
  { name: 'React', icon: <FaReact className="text-6xl text-blue-500" /> },
  { name: 'SQL', icon: <FaDatabase className="text-6xl text-gray-600" /> },
  { name: 'JavaScript', icon: <FaJs className="text-6xl text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-6xl text-blue-600" /> },
  { name: 'CSS/HTML', icon: <FaCss3Alt className="text-6xl text-blue-700" />, extra: <SiHtml5 className="text-6xl text-orange-500" /> },
  { name: 'Angular', icon: <FaAngular className="text-6xl text-red-600" /> }
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
