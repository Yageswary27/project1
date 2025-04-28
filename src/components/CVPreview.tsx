import React from 'react';

const CVPreview: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">CV Preview</h1>
      {/* Render data here */}
      <p className="text-center text-gray-600">This is where your generated CV will appear.</p>
    </div>
  );
};

export default CVPreview;
