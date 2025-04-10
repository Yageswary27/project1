import React from "react";
import { Project } from "../../types/Project";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
  view: "grid" | "list";
}

const ProjectList: React.FC<Props> = ({ projects, view }) => {
  return (
    <div className={view === "grid" ? "grid md:grid-cols-3 gap-4" : "space-y-4"}>
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;