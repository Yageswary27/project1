import React, { useState } from 'react';

const PersonalInfoForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    linkedIn: '',
    website: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="input" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input" />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="input" />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="input" />
        <input type="text" name="linkedIn" value={formData.linkedIn} onChange={handleChange} placeholder="LinkedIn Profile" className="input" />
        <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Portfolio Website" className="input" />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
