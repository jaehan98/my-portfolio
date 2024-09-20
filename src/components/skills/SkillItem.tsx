import React from 'react';

interface SkillItemProps {
  name: string;
  icon: React.ReactNode;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon }) => {
  return (
    <div className="skill-item p-4 hover:bg-gray-200 rounded-lg flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-110">
      <div className="mb-2">
        {icon}
      </div>
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
};

export default SkillItem;
