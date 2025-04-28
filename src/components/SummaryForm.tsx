import React, { useState } from 'react';

const SummaryForm: React.FC = () => {
  const [summary, setSummary] = useState('');

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Professional Summary</h2>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Write a brief summary about yourself"
        className="input w-full h-40"
      />
    </div>
  );
};

export default SummaryForm;
