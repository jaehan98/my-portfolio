import React from 'react';

const educationData = [
  {
    institution: 'Rutgers University',
    degree: 'BA in Information Technology and Informatics. Minor in Korean',
    period: '2016 - 2020',
  },
  {
    institution: 'Ewha University',
    degree: 'Studied abroad for a summer in South Korea',
    period: '2018 - 2018',
  }
];

const Education = () => {
  return (
    <section id="education" className="mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <ul className="space-y-4">
        {educationData.map((edu, index) => (
          <li key={index} className="custom-card">
            <h3 className="text-xl font-bold">{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p className="text-gray-500">{edu.period}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
