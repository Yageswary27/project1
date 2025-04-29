"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import{ Input } from "./ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent } from "../components/ui/card"
import { Select ,SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import type { Language } from "../app/page"
import { Plus, Trash } from "lucide-react"
import { v4 as uuidv4 } from "uuid"

interface LanguagesFormProps {
  languages: Language[]
  setLanguages: React.Dispatch<React.SetStateAction<Language[]>>
  onNext: () => void
}

export function LanguagesForm({ languages, setLanguages, onNext }: LanguagesFormProps) {
  const [newLanguage, setNewLanguage] = useState<Language>({
    id: uuidv4(),
    name: "",
    proficiency: "Intermediate",
  })

  const proficiencyLevels = ["Native", "Fluent", "Advanced", "Intermediate", "Basic"]

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLanguage((prev) => ({
      ...prev,
      name: e.target.value,
    }))
  }

  const handleProficiencyChange = (value: string) => {
    setNewLanguage((prev) => ({
      ...prev,
      proficiency: value,
    }))
  }

  const handleAddLanguage = () => {
    if (newLanguage.name) {
      setLanguages((prev) => [...prev, newLanguage])
      setNewLanguage({
        id: uuidv4(),
        name: "",
        proficiency: "Intermediate",
      })
    }
  }

  const handleRemoveLanguage = (id: string) => {
    setLanguages((prev) => prev.filter((lang) => lang.id !== id))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Languages</h2>

      {languages.length > 0 && (
        <div className="space-y-4 mb-6">
          <h3 className="text-md font-medium">Added Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {languages.map((language) => (
              <Card key={language.id} className="relative border-2">
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-6 w-6"
                  onClick={() => handleRemoveLanguage(language.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
                <CardContent className="p-4">
                  <div className="font-medium">{language.name}</div>
                  <div className="text-sm text-muted-foreground">{language.proficiency}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4 border-2 p-4 rounded-lg">
        <h3 className="text-md font-medium">Add New Language</h3>

        <div className="space-y-2">
          <Label htmlFor="languageName">Language</Label>
          <Input
            id="languageName"
            value={newLanguage.name}
            onChange={handleNameChange}
            placeholder="e.g., English, Spanish, French"
            className="border-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="proficiency">Proficiency Level</Label>
          <Select value={newLanguage.proficiency} onValueChange={handleProficiencyChange}>
            <SelectTrigger id="proficiency" className="border-2">
              <SelectValue placeholder="Select proficiency level" />
            </SelectTrigger>
            <SelectContent>
              {proficiencyLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button onClick={handleAddLanguage} className="w-full" disabled={!newLanguage.name}>
          <Plus className="h-4 w-4 mr-2" />
          Add Language
        </Button>
      </div>

      <Button onClick={onNext} className="w-full">
        Next: Hobbies
      </Button>
    </div>
  )
}
