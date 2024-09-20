import React from 'react';

const skillsData = [
  { name: 'React', color: 'text-blue-500' },
  { name: 'JavaScript', color: 'text-yellow-500' },
  { name: 'TypeScript', color: 'text-blue-600' },
  { name: 'HTML', color: 'text-orange-500' },
  { name: 'CSS', color: 'text-blue-700' },
  { name: 'Angular', color: 'text-red-600' },
];

const Skills = () => {
  return (
    <section id="skills" className="text-center container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {skillsData.map(skill => (
          <div key={skill.name} className="skill-card group">
            <p className={`text-2xl font-bold ${skill.color} transition-colors duration-200 ease-in-out group-hover:text-opacity-75`}>
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
