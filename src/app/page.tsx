"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tab"
import { PersonalInfoForm } from "../components/personal-info-form"
import { EducationForm } from "../components/education-form"
import { ExperienceForm } from "../components/experience-form"
import { SkillsForm } from "../components/skills-form"
import { HobbiesForm } from "../components/hobbies-form"
import { LanguagesForm } from "../components/languages-form"
import { ProjectsForm } from "../components/projects-form"
import { SummaryForm } from "../components/summary-form"
import { CVPreview } from "../components/cv-preview"
import { Download, Palette } from "lucide-react"
import { generatePDF } from "../lib/generate-pdf"
import { ThemeProvider, useTheme } from "../components/theme-context"
import { ThemeSelector } from "../components/theme-selector"

export type PersonalInfo = {
  fullName: string
  email: string
  phone: string
  address: string
  objective: string
  profileImage?: string
}

export type Education = {
  id: string
  institution: string
  degree: string
  school: string
  fieldOfStudy: string
  startDate: string
  endDate: string
  description: string
}

export type Experience = {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

export type Skill = {
  id: string
  name: string
  level: number
}

export type Hobby = {
  id: string
  name: string
}

export type Language = {
  id: string
  name: string
  proficiency: string
}

export type Project = {
  id: string
  title: string
  description: string
  technologies: string
  link: string
  startDate: string
  endDate: string
}

export type Summary = {
  content: string
}

function CVGeneratorContent() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    objective: "",
  })

  const [education, setEducation] = useState<Education[]>([])
  const [experience, setExperience] = useState<Experience[]>([])
  const [skills, setSkills] = useState<Skill[]>([])
  const [hobbies, setHobbies] = useState<Hobby[]>([])
  const [languages, setLanguages] = useState<Language[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [summary, setSummary] = useState<Summary>({ content: "" })
  const [activeTab, setActiveTab] = useState("personal")
  const { theme, setThemeOpen } = useTheme()

  const handleDownloadPDF = async () => {
    await generatePDF({
      personalInfo,
      education,
      experience,
      skills,
      hobbies,
      languages,
      projects,
      summary,
    })
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-center">Professional CV Generator</h1>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Button variant="outline" onClick={() => setThemeOpen(true)} className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Customize Theme
          </Button>
          <Button onClick={handleDownloadPDF} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-2 shadow-lg">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
              </TabsList>
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="languages">Languages</TabsTrigger>
                <TabsTrigger value="hobbies">Hobbies</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <PersonalInfoForm
                  personalInfo={personalInfo}
                  setPersonalInfo={setPersonalInfo}
                  onNext={() => setActiveTab("summary")}
                />
              </TabsContent>

              <TabsContent value="summary">
                <SummaryForm summary={summary} setSummary={setSummary} onNext={() => setActiveTab("education")} />
              </TabsContent>

              <TabsContent value="education">
                <EducationForm
                  education={education}
                  setEducation={setEducation}
                  onNext={() => setActiveTab("experience")}
                />
              </TabsContent>

              <TabsContent value="experience">
                <ExperienceForm
                  experience={experience}
                  setExperience={setExperience}
                  onNext={() => setActiveTab("skills")}
                />
              </TabsContent>

              <TabsContent value="skills">
                <SkillsForm skills={skills} setSkills={setSkills} onNext={() => setActiveTab("projects")} />
              </TabsContent>

              <TabsContent value="projects">
                <ProjectsForm projects={projects} setProjects={setProjects} onNext={() => setActiveTab("languages")} />
              </TabsContent>

              <TabsContent value="languages">
                <LanguagesForm
                  languages={languages}
                  setLanguages={setLanguages}
                  onNext={() => setActiveTab("hobbies")}
                />
              </TabsContent>

              <TabsContent value="hobbies">
                <HobbiesForm hobbies={hobbies} setHobbies={setHobbies} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex flex-col">
          <Card className="flex-1 border-2 shadow-lg">
            <CardContent className="p-6 h-full">
              <CVPreview
                personalInfo={personalInfo}
                education={education}
                experience={experience}
                skills={skills}
                hobbies={hobbies}
                languages={languages}
                projects={projects}
                summary={summary}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function CVGenerator() {
  return (
    <ThemeProvider>
      <CVGeneratorContent />
      <ThemeSelector />
    </ThemeProvider>
  )
}
