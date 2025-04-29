import type React from "react"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent } from "../components/ui/card"
import Slider from "./ui/slider"
import type { Skill } from "../app/page"
import { Plus, Trash } from "lucide-react"
import { v4 as uuidv4 } from "uuid"

interface SkillsFormProps {
  skills: Skill[]
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>
  onNext: () => void
}

export function SkillsForm({ skills, setSkills, onNext }: SkillsFormProps) {
  const [newSkill, setNewSkill] = useState<Skill>({
    id: uuidv4(),
    name: "",
    level: 3,
  })

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSkill((prev) => ({
      ...prev,
      name: e.target.value,
    }))
  }

  const handleLevelChange = (value: number) => {
    setNewSkill({ ...newSkill, level: value });
  };
  

  const handleAddSkill = () => {
    if (newSkill.name) {
      setSkills((prev) => [...prev, newSkill])
      setNewSkill({
        id: uuidv4(),
        name: "",
        level: 3,
      })
    }
  }

  const handleRemoveSkill = (id: string) => {
    setSkills((prev) => prev.filter((skill) => skill.id !== id))
  }

  const getLevelText = (level: number) => {
    switch (level) {
      case 1:
        return "Beginner"
      case 2:
        return "Elementary"
      case 3:
        return "Intermediate"
      case 4:
        return "Advanced"
      case 5:
        return "Expert"
      default:
        return "Intermediate"
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>

      {skills.length > 0 && (
        <div className="space-y-4 mb-6">
          <h3 className="text-md font-medium">Added Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill) => (
              <Card key={skill.id} className="relative border-2">
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-6 w-6"
                  onClick={() => handleRemoveSkill(skill.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
                <CardContent className="p-4">
                  <div className="font-medium">{skill.name}</div>
                  <div className="text-sm text-muted-foreground">{getLevelText(skill.level)}</div>
                  <div className="mt-2">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4 border-2 p-4 rounded-lg">
        <h3 className="text-md font-medium">Add New Skill</h3>

        <div className="space-y-2">
          <Label htmlFor="skillName">Skill Name</Label>
          <Input
            id="skillName"
            value={newSkill.name}
            onChange={handleNameChange}
            placeholder="Programming Language, Tool, Soft Skill, etc."
            className="border-2"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <Label htmlFor="skillLevel">Proficiency Level</Label>
            <span className="text-sm text-muted-foreground">{getLevelText(newSkill.level)}</span>
          </div>
          {/* Update this line to pass a number instead of an array */}
          <Slider id="skillLevel" min={1} max={5} step={1} value={newSkill.level} onValueChange={handleLevelChange} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Beginner</span>
            <span>Expert</span>
          </div>
        </div>

        <Button onClick={handleAddSkill} className="w-full" disabled={!newSkill.name}>
          <Plus className="h-4 w-4 mr-2" />
          Add Skill
        </Button>
      </div>

      <Button onClick={onNext} className="w-full">
        Next: Projects
      </Button>
    </div>
  )
}
