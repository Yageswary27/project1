"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "./ui/textaera"
import { Card, CardContent } from "../components/ui/card"
import { Checkbox } from "./ui/checkbox"
import type { Experience } from "../app/page"
import { Plus, Trash } from "lucide-react"
import { v4 as uuidv4 } from "uuid"

interface ExperienceFormProps {
  experience: Experience[]
  setExperience: React.Dispatch<React.SetStateAction<Experience[]>>
  onNext: () => void
}

export function ExperienceForm({ experience, setExperience, onNext }: ExperienceFormProps) {
  const [newExperience, setNewExperience] = useState<Experience>({
    id: uuidv4(),
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewExperience((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // ✅ Fixed here: handleCheckboxChange now safely checks boolean
  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    const isChecked = checked === true
    setNewExperience((prev) => ({
      ...prev,
      current: isChecked,
      endDate: isChecked ? "Present" : "",
    }))
  }

  const handleAddExperience = () => {
    if (newExperience.company && newExperience.position) {
      setExperience((prev) => [...prev, newExperience])
      setNewExperience({
        id: uuidv4(),
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      })
    }
  }

  const handleRemoveExperience = (id: string) => {
    setExperience((prev) => prev.filter((exp) => exp.id !== id))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Work Experience</h2>

      {experience.length > 0 && (
        <div className="space-y-4 mb-6">
          <h3 className="text-md font-medium">Added Experience</h3>
          {experience.map((exp) => (
            <Card key={exp.id} className="relative border-2">
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-6 w-6"
                onClick={() => handleRemoveExperience(exp.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
              <CardContent className="p-4">
                <div className="font-medium">{exp.position}</div>
                <div>
                  {exp.company}, {exp.location}
                </div>
                <div className="text-sm text-muted-foreground">
                  {exp.startDate} - {exp.endDate}
                </div>
                {exp.description && <p className="mt-2 text-sm">{exp.description}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="space-y-4 border-2 p-4 rounded-lg">
        <h3 className="text-md font-medium">Add New Experience</h3>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            value={newExperience.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="border-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="position">Position</Label>
          <Input
            id="position"
            name="position"
            value={newExperience.position}
            onChange={handleChange}
            placeholder="Job Title"
            className="border-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={newExperience.location}
            onChange={handleChange}
            placeholder="City, Country or Remote"
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
              value={newExperience.startDate}
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
              value={newExperience.endDate}
              onChange={handleChange}
              disabled={newExperience.current}
              placeholder={newExperience.current ? "Present" : ""}
              className="border-2"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="current" checked={newExperience.current} onCheckedChange={handleCheckboxChange} />
          <Label htmlFor="current">I currently work here</Label>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={newExperience.description}
            onChange={handleChange}
            placeholder="Describe your responsibilities and achievements"
            rows={3}
            className="border-2"
          />
        </div>

        <Button
          onClick={handleAddExperience}
          className="w-full"
          disabled={!newExperience.company || !newExperience.position}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </Button>
      </div>

      <Button
        onClick={onNext}
        className="w-full"
        // Optional: Only enable Next if at least 1 experience added
        disabled={experience.length === 0}
      >
        Next: Skills
      </Button>
    </div>
  )
}
