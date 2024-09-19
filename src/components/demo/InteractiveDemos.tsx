import React from 'react';
import FrontendDemo from './FrontendDemo';
import BackendDemo from './BackendDemo';
import D3Visualization from './D3Visualization';

const InteractiveDemos = () => {
  return (
    <section className="mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Interactive Demos</h2>
      <div className="max-w-4xl mx-auto">
        <FrontendDemo />
        <BackendDemo />
        <D3Visualization />
      </div>
    </section>
  );
};

export default InteractiveDemos;
