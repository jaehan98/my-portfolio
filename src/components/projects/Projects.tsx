import React from 'react';
import ProjectItem from './ProjectItem';

const projectsData = [
  { name: 'Brainy Cards', description: 'Developed MVP for an innovative app...', link: '#' },
  { name: 'Another Project', description: 'A description of another project...', link: '#' }
];

const Projects = () => {
  return (
    <section className="mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      {projectsData.map((project) => (
        <ProjectItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </section>
  );
};

export default Projects;
