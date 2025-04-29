"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent } from "../components/ui/card"
import type { Hobby } from "../app/page"
import { Plus, Trash } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import { Badge } from "../components/ui/badge"

interface HobbiesFormProps {
  hobbies: Hobby[]
  setHobbies: React.Dispatch<React.SetStateAction<Hobby[]>>
}

export function HobbiesForm({ hobbies, setHobbies }: HobbiesFormProps) {
  const [newHobby, setNewHobby] = useState("")

  const handleAddHobby = () => {
    if (newHobby.trim()) {
      setHobbies((prev) => [...prev, { id: uuidv4(), name: newHobby.trim() }])
      setNewHobby("")
    }
  }

  const handleRemoveHobby = (id: string) => {
    setHobbies((prev) => prev.filter((hobby) => hobby.id !== id))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddHobby()
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Hobbies & Interests</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="hobby">Add Hobby or Interest</Label>
          <div className="flex gap-2">
            <Input
              id="hobby"
              value={newHobby}
              onChange={(e) => setNewHobby(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g., Photography, Hiking, Chess"
              className="border-2"
            />
            <Button onClick={handleAddHobby} disabled={!newHobby.trim()}>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>

        {hobbies.length > 0 ? (
          <Card className="border-2">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby) => (
                  <Badge key={hobby.id} variant="secondary" className="px-3 py-1.5 text-sm">
                    {hobby.name}
                    <button
                      onClick={() => handleRemoveHobby(hobby.id)}
                      className="ml-2 text-muted-foreground hover:text-destructive"
                    >
                      <Trash className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center p-8 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">No hobbies added yet. Add some to make your CV more personal.</p>
          </div>
        )}

        <div className="bg-primary/5 p-4 rounded-md">
          <h3 className="font-medium mb-2">Why Include Hobbies?</h3>
          <p className="text-sm">
            Including relevant hobbies and interests can show personality, cultural fit, and transferable skills. They
            can also serve as great conversation starters in interviews.
          </p>
        </div>
      </div>
    </div>
  )
}
