import React from 'react';

const projectsData = [
  { name: 'Project One', description: 'A web app built with React and TypeScript.', link: '#' },
  { name: 'Project Two', description: 'A tool developed using JavaScript and D3.js.', link: '#' },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-10 text-center container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map(project => (
          <a 
            key={project.name} 
            href={project.link} 
            className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-200 ease-in-out">
              {project.name}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-800">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
