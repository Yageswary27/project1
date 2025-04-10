import React from "react";
import { Project } from "../../types/Project";
import { Eye, Edit, Archive, Play } from "lucide-react";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const color =
    project.score >= 80
      ? "text-green-600"
      : project.score >= 50
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <div className="border rounded-lg p-8 shadow-4xl bg-white overflow-x-auto">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-4">
          {project.favicon && (
            <img src={project.favicon} alt="favicon" className="w-8 h-8" />
          )}
          <h2 className="font-semibold text-lg text-gray-800">{project.name}</h2>
        </div>
        <span
          className={`text-xs px-3 py-1 rounded-full ${
            project.status === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {project.status}
        </span>
      </div>

      <p className="text-sm text-gray-500">{project.url}</p>
      <p className="text-sm text-gray-500 mb-3">Last scan: {project.lastScan}</p>

      <p className={`text-sm font-semibold ${color}`}>Score: {project.score}%</p>

      <div className="flex gap-3 mt-4">
        <button className="text-blue-600 hover:underline flex items-center text-sm">
          <Play size={14} className="mr-2" /> Scan
        </button>
        <button className="text-gray-700 hover:underline flex items-center text-sm">
          <Eye size={14} className="mr-2" /> View
        </button>
        <button className="text-yellow-600 hover:underline flex items-center text-sm">
          <Edit size={14} className="mr-2" /> Edit
        </button>
        <button className="text-red-600 hover:underline flex items-center text-sm">
          <Archive size={14} className="mr-2" /> Archive
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
