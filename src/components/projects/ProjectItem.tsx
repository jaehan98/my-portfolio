import React from 'react';

interface ProjectItemProps {
  name: string;
  description: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, description, link }) => {
  return (
    <div className="project-item mb-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{description}</p>
      <a href={link} className="text-blue-500 hover:underline">View Project</a>
    </div>
  );
};

export default ProjectItem;
