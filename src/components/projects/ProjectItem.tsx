import React from 'react';

interface ProjectItemProps {
  name: string;
  description: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, description, link }) => {
  return (
    <div className="project-item mb-4 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md transition-colors duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-gray-700 dark:text-gray-400">{description}</p>
      <a href={link} className="text-blue-500 dark:text-blue-300 hover:underline">
        View Project
      </a>
    </div>
  );
};

export default ProjectItem;
