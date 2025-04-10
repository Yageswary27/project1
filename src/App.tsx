import React, { useState } from "react";
import ProjectsHeader from "./components/ProjectsHeader";
import ProjectList from "./components/Projects/ProjectList";
import AddProjectModal from "./components/Projects/AddProjectModal";
import { Project } from "./types/Project";


const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const [view, setView] = useState<"grid" | "list">("grid");
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("name");

  const handleAddProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  const filteredProjects = projects
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "date") return new Date(b.lastScan).getTime() - new Date(a.lastScan).getTime();
      if (sort === "score") return b.score - a.score;
      return 0;
    });

    

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ProjectsHeader
        total={filteredProjects.length}
        view={view}
        onViewChange={setView}
        onSearch={setSearchTerm}
        onSortChange={setSort}
        onAddProject={() => setShowModal(true)}
      />

      <div className={
        view === "grid"
          ? "grid 4 mt-4"
          : "flex flex-col gap-4 mt-4"
      }>
        
      </div>
      <ProjectList view={view} projects={filteredProjects} />
      
      {showModal && (
        <AddProjectModal
          onClose={() => setShowModal(false)}
          onCreate={handleAddProject}
        />
      )}
    </div>
  );
};

export default App;