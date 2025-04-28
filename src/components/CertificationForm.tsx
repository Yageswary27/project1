import React, { useState } from 'react';

const CertificationForm: React.FC = () => {
  const [certification, setCertification] = useState('');

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
      <textarea
        value={certification}
        onChange={(e) => setCertification(e.target.value)}
        placeholder="List your certifications"
        className="input w-full h-32"
      />
    </div>
  );
};

export default CertificationForm;
