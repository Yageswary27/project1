import React, { useState } from 'react';

const LanguagesForm: React.FC = () => {
  const [languages, setLanguages] = useState('');

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Languages</h2>
      <textarea
        value={languages}
        onChange={(e) => setLanguages(e.target.value)}
        placeholder="List languages you know"
        className="input w-full h-32"
      />
    </div>
  );
};

export default LanguagesForm;
