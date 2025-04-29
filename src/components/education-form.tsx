"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "./ui/textaera"
import { Card, CardContent } from "../components/ui/card"
import type { Education } from "../app/page"
import { Plus, Trash } from "lucide-react"
import { v4 as uuidv4 } from "uuid"

interface EducationFormProps {
  education: Education[]
  setEducation: React.Dispatch<React.SetStateAction<Education[]>>
  onNext: () => void
}

export function EducationForm({ education, setEducation, onNext }: EducationFormProps) {
  const [newEducation, setNewEducation] = useState<Education>({
    
    id: uuidv4(),
    institution: "",
    degree: "",
    school:"",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    function MyComponent({ education }: { education: Education[] }) {
      return (
        <div>
          {education.map((edu, index) => (
            <div key={index}>
              <p>{edu.degree}</p>
              <p>{edu.school}</p>
            </div>
          ))}
        </div>
      )
    }
    
    const { name, value } = e.target
    setNewEducation((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddEducation = () => {
    if (newEducation.institution && newEducation.degree) {
      setEducation((prev) => [...prev, newEducation])
      setNewEducation({
        id: uuidv4(),
        institution: "",
        degree: "",
        school:"",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        description: "",
      })
    }
  }

  const handleRemoveEducation = (id: string) => {
    setEducation((prev) => prev.filter((edu) => edu.id !== id))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>

      {education.length > 0 && (
        <div className="space-y-4 mb-6">
          <h3 className="text-md font-medium">Added Education</h3>
          {education.map((edu) => (
            <Card key={edu.id} className="relative border-2">
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-6 w-6"
                onClick={() => handleRemoveEducation(edu.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
              <CardContent className="p-4">
                <div className="font-medium">{edu.institution}</div>
                <div>
                  {edu.degree} in {edu.fieldOfStudy}
                </div>
                <div className="text-sm text-muted-foreground">
                  {edu.startDate} - {edu.endDate}
                </div>
                {edu.description && <p className="mt-2 text-sm">{edu.description}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="space-y-4 border-2 p-4 rounded-lg">
        <h3 className="text-md font-medium">Add New Education</h3>

        <div className="space-y-2">
          <Label htmlFor="institution">Institution</Label>
          <Input
            id="institution"
            name="institution"
            value={newEducation.institution}
            onChange={handleChange}
            placeholder="University or School Name"
            className="border-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="degree">Degree</Label>
          <Input
            id="degree"
            name="degree"
            value={newEducation.degree}
            onChange={handleChange}
            placeholder="Bachelor's, Master's, etc."
            className="border-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fieldOfStudy">Field of Study</Label>
          <Input
            id="fieldOfStudy"
            name="fieldOfStudy"
            value={newEducation.fieldOfStudy}
            onChange={handleChange}
            placeholder="Computer Science, Business, etc."
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
              value={newEducation.startDate}
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
              value={newEducation.endDate}
              onChange={handleChange}
              placeholder="Present (if current)"
              className="border-2"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={newEducation.description}
            onChange={handleChange}
            placeholder="Relevant coursework, achievements, etc."
            rows={3}
            className="border-2"
          />
        </div>

        <Button
          onClick={handleAddEducation}
          className="w-full"
          disabled={!newEducation.institution || !newEducation.degree}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </Button>
      </div>

      <Button onClick={onNext} className="w-full">
        Next: Experience
      </Button>
    </div>
  )
}
