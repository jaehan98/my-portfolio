import React from 'react';
import FrontendDemo from './FrontendDemo';
import BackendDemo from './BackendDemo';
import D3Visualization from './D3Visualization';

const InteractiveDemos = () => {
  return (
    <section id="demos" className="container mx-auto py-10 px-4">
      <h2 className="custom-heading">Interactive Demos</h2>
      <div className="space-y-8">
        <FrontendDemo />
        <BackendDemo />
        <D3Visualization />
      </div>
    </section>
  );
};

export default InteractiveDemos;
