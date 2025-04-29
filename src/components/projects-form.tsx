"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "./ui/textaera"
import { Card, CardContent } from "./ui/card"
import type { Project } from "../app/page"
import { Plus, Trash, LinkIcon } from "lucide-react"
import { v4 as uuidv4 } from "uuid"

interface ProjectsFormProps {
  projects: Project[]
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>
  onNext: () => void
}

export function ProjectsForm({ projects, setProjects, onNext }: ProjectsFormProps) {
  const [newProject, setNewProject] = useState<Project>({
    id: uuidv4(),
    title: "",
    description: "",
    technologies: "",
    link: "",
    startDate: "",
    endDate: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      setProjects((prev) => [...prev, newProject])
      setNewProject({
        id: uuidv4(),
        title: "",
        description: "",
        technologies: "",
        link: "",
        startDate: "",
        endDate: "",
      })
    }
  }

  const handleRemoveProject = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>

      {projects.length > 0 && (
        <div className="space-y-4 mb-6">
          <h3 className="text-md font-medium">Added Projects</h3>
          {projects.map((project) => (
            <Card key={project.id} className="relative border-2">
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-6 w-6"
                onClick={() => handleRemoveProject(project.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
              <CardContent className="p-4">
                <div className="font-medium">{project.title}</div>
                <div className="text-sm text-muted-foreground">
                  {project.startDate} - {project.endDate}
                </div>
                <div className="text-sm mt-1">{project.description}</div>
                {project.technologies && (
                  <div className="text-sm mt-1">
                    <span className="font-medium">Technologies:</span> {project.technologies}
                  </div>
                )}
                {project.link && (
                  <div className="flex items-center mt-2 text-sm text-primary">
                    <LinkIcon className="h-3 w-3 mr-1" />
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Project Link
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="space-y-4 border-2 p-4 rounded-lg">
        <h3 className="text-md font-medium">Add New Project</h3>

        <div className="space-y-2">
          <Label htmlFor="title">Project Title</Label>
          <Input
            id="title"
            name="title"
            value={newProject.title}
            onChange={handleChange}
            placeholder="e.g., E-commerce Website, Mobile App"
            className="border-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              type="month"
              value={newProject.startDate}
              onChange={handleChange}
              className="border-2"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              name="endDate"
              type="month"
              value={newProject.endDate}
              onChange={handleChange}
              placeholder="Present (if ongoing)"
              className="border-2"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={newProject.description}
            onChange={handleChange}
            placeholder="Describe the project, your role, and key achievements"
            rows={3}
            className="border-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="technologies">Technologies Used</Label>
          <Input
            id="technologies"
            name="technologies"
            value={newProject.technologies}
            onChange={handleChange}
            placeholder="e.g., React, Node.js, MongoDB"
            className="border-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="link">Project Link (Optional)</Label>
          <Input
            id="link"
            name="link"
            value={newProject.link}
            onChange={handleChange}
            placeholder="https://..."
            className="border-2"
          />
        </div>

        <Button onClick={handleAddProject} className="w-full" disabled={!newProject.title || !newProject.description}>
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>

      <Button onClick={onNext} className="w-full">
        Next: Languages
      </Button>
    </div>
  )
}
