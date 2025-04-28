import React, { useState } from 'react';

const SkillsForm: React.FC = () => {
  const [skills, setSkills] = useState('');

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <textarea
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="List your skills separated by commas"
        className="input w-full h-32"
      />
    </div>
  );
};

export default SkillsForm;
