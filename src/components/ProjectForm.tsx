import React, { useState } from 'react';

const ProjectForm: React.FC = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    link: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <input type="text" name="title" value={project.title} onChange={handleChange} placeholder="Project Title" className="input mb-4" />
      <textarea name="description" value={project.description} onChange={handleChange} placeholder="Project Description" className="input mb-4" />
      <input type="text" name="link" value={project.link} onChange={handleChange} placeholder="Project Link" className="input" />
    </div>
  );
};

export default ProjectForm;
