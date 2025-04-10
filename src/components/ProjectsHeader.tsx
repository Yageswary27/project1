import React, { useState } from "react";
import { List, LayoutGrid, Plus } from "lucide-react";

interface ProjectsHeaderProps {
  total: number;
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
  onSearch: (term: string) => void;
  onSortChange: (sort: string) => void;
  onAddProject: () => void;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
  total,
  view,
  onViewChange,
  onSearch,
  onSortChange,
  onAddProject,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-white shadow rounded-xl">
      {/* Left - Title and Add Button */}
      <div className="flex items-center gap-4 flex-wrap">
        <h1 className="text-lg font-semibold text-gray-800">
          Projects <span className="text-sm text-gray-500">({total})</span>
        </h1>
        <button
          onClick={onAddProject}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg shadow-sm"
        >
          <Plus size={16} /> Add New Project
        </button>
      </div>

      {/* Right - Search, Sort, View Toggle */}
      <div className="flex items-center gap-3 flex-wrap">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="px-3 py-2 border rounded-md text-sm w-52"
          placeholder="Search projects..."
        />

        <select
          onChange={(e) => onSortChange(e.target.value)}
          className="px-3 py-2 border rounded-md text-sm"
        >
          <option value="name">Sort by Name</option>
          <option value="date">Sort by Date</option>
          <option value="score">Sort by Score</option>
        </select>

        <div className="flex gap-2">
          <button
            onClick={() => onViewChange("list")}
            className={`p-2 rounded-md border ${
              view === "list"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <List size={18} />
          </button>
          <button
            onClick={() => onViewChange("grid")}
            className={`p-2 rounded-md border ${
              view === "grid"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <LayoutGrid size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
