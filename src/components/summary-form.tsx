"use client"

import type React from "react"

import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { Textarea } from "./ui/textaera"
import type { Summary } from "../app/page"

interface SummaryFormProps {
  summary: Summary
  setSummary: React.Dispatch<React.SetStateAction<Summary>>
  onNext: () => void
}

export function SummaryForm({ summary, setSummary, onNext }: SummaryFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary({ content: e.target.value })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea
            id="summary"
            value={summary.content}
            onChange={handleChange}
            placeholder="Write a compelling summary of your professional background, key strengths, and career achievements. This section should highlight what makes you unique and why you're a good fit for the positions you're targeting."
            rows={10}
            className="border-2"
          />
          <p className="text-sm text-muted-foreground">
            A strong professional summary is 4-6 sentences that highlight your most relevant skills, experiences, and
            accomplishments.
          </p>
        </div>

        <div className="bg-primary/5 p-4 rounded-md">
          <h3 className="font-medium mb-2">Tips for a Great Summary</h3>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Keep it concise and focused on your most impressive qualifications</li>
            <li>Tailor it to the specific job or industry you're targeting</li>
            <li>Include keywords relevant to your field</li>
            <li>Highlight your unique value proposition</li>
            <li>Avoid generic statements that could apply to anyone</li>
          </ul>
        </div>
      </div>

      <Button onClick={onNext} className="w-full">
        Next: Education
      </Button>
    </div>
  )
}
