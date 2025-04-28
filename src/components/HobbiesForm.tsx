import React, { useState } from 'react';

const HobbiesForm: React.FC = () => {
  const [hobbies, setHobbies] = useState('');

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Hobbies</h2>
      <textarea
        value={hobbies}
        onChange={(e) => setHobbies(e.target.value)}
        placeholder="List your hobbies"
        className="input w-full h-32"
      />
    </div>
  );
};

export default HobbiesForm;
