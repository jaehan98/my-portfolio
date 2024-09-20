import React from 'react';

const experienceData = [
  {
    company: 'Qualtrics',
    description: 'Developed client-facing features enhancing user experience with responsive and interactive data visualizations',
    period: 'Jul 2022 - Feb 2024',
  },
  {
    company: 'CDM Smith',
    description: 'Built and maintained secure, user-friendly web pages for users to manage and interact with sensitive data on government projects',
    period: 'Sep 2020 - Mar 2022',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <ul className="space-y-4">
        {experienceData.map((exp, index) => (
          <li key={index} className="custom-card">
            <h3 className="text-xl font-bold">{exp.company}</h3>
            <p className="text-gray-500">{exp.period}</p>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
