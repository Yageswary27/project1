import React, { useState } from 'react';

const ExperienceForm: React.FC = () => {
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="company" value={experience.company} onChange={handleChange} placeholder="Company" className="input" />
        <input type="text" name="position" value={experience.position} onChange={handleChange} placeholder="Position" className="input" />
        <input type="text" name="startDate" value={experience.startDate} onChange={handleChange} placeholder="Start Date" className="input" />
        <input type="text" name="endDate" value={experience.endDate} onChange={handleChange} placeholder="End Date" className="input" />
        <textarea name="description" value={experience.description} onChange={handleChange} placeholder="Job Responsibilities" className="input md:col-span-2" />
      </div>
    </div>
  );
};

export default ExperienceForm;
