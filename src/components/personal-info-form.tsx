"use client"

import type React from "react"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "./ui/textaera"
import type { PersonalInfo } from "../app/page"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { User } from "lucide-react"

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>
  onNext: () => void
}

export function PersonalInfoForm({ personalInfo, setPersonalInfo, onNext }: PersonalInfoFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPersonalInfo((prev) => ({
          ...prev,
          profileImage: reader.result as string,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

      <div className="flex flex-col items-center mb-6">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={personalInfo.profileImage || "/placeholder.svg"} alt="Profile" />
          <AvatarFallback className="bg-primary/10">
            <User className="h-12 w-12 text-primary" />
          </AvatarFallback>
        </Avatar>
        <div>
          <Label
            htmlFor="profileImage"
            className="cursor-pointer text-sm px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            Upload Photo
          </Label>
          <Input id="profileImage" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            value={personalInfo.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className="border-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={personalInfo.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            className="border-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
            placeholder="+1 (123) 456-7890"
            className="border-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={personalInfo.address}
            onChange={handleChange}
            placeholder="123 Main St, City, Country"
            className="border-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="objective">Career Objective</Label>
          <Textarea
            id="objective"
            name="objective"
            value={personalInfo.objective}
            onChange={handleChange}
            placeholder="A brief statement about your career goals"
            rows={3}
            className="border-2"
          />
        </div>
      </div>

      <Button onClick={onNext} className="w-full">
        Next: Professional Summary
      </Button>
    </div>
  )
}
