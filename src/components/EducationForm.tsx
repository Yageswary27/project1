import React, { useState } from 'react';

const EducationForm: React.FC = () => {
  const [education, setEducation] = useState({
    school: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="school" value={education.school} onChange={handleChange} placeholder="School/University" className="input" />
        <input type="text" name="degree" value={education.degree} onChange={handleChange} placeholder="Degree" className="input" />
        <input type="text" name="field" value={education.field} onChange={handleChange} placeholder="Field of Study" className="input" />
        <input type="text" name="startDate" value={education.startDate} onChange={handleChange} placeholder="Start Date" className="input" />
        <input type="text" name="endDate" value={education.endDate} onChange={handleChange} placeholder="End Date" className="input" />
      </div>
    </div>
  );
};

export default EducationForm;
