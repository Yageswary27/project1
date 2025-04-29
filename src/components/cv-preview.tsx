"use client"

import type { PersonalInfo, Education, Experience, Skill, Hobby, Language, Project, Summary } from "../app/page"
import {
  FileText,
  Mail,
  MapPin,
  Phone,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  Languages,
  Code,
} from "lucide-react"
import { useTheme } from "./theme-context"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { User } from "lucide-react"

interface CVPreviewProps {
  personalInfo: PersonalInfo
  education: Education[]
  experience: Experience[]
  skills: Skill[]
  hobbies: Hobby[]
  languages: Language[]
  projects: Project[]
  summary: Summary
}

export function CVPreview({
  personalInfo,
  education,
  experience,
  skills,
  hobbies,
  languages,
  projects,
  summary,
}: CVPreviewProps) {
  const { theme } = useTheme()

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

  if (!personalInfo.fullName && education.length === 0 && experience.length === 0 && skills.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8 text-muted-foreground">
        <FileText className="h-16 w-16 mb-4" />
        <h3 className="text-lg font-medium mb-2">Your CV Preview</h3>
        <p>Fill out the forms to see your CV preview here.</p>
      </div>
    )
  }

  return (
    <div
      className="cv-preview"
      id="cv-preview"
      style={{
        color: theme.text,
        backgroundColor: theme.background,
      }}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="p-6 rounded-md mb-6" style={{ backgroundColor: theme.primary, color: "white" }}>
          <div className="flex items-center gap-4">
            {personalInfo.profileImage && (
              <Avatar className="h-20 w-20 border-2 border-white">
                <AvatarImage src={personalInfo.profileImage || "/placeholder.svg"} alt={personalInfo.fullName} />
                <AvatarFallback className="bg-white/20">
                  <User className="h-10 w-10 text-white" />
                </AvatarFallback>
              </Avatar>
            )}
            <div>
              <h1 className="text-2xl font-bold">{personalInfo.fullName || "Your Name"}</h1>
              {personalInfo.objective && <p className="text-sm mt-1 text-white/80">{personalInfo.objective}</p>}
            </div>
          </div>

          <div className="flex flex-wrap justify-start gap-4 mt-4 text-sm text-white/90">
            {personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>{personalInfo.email}</span>
              </div>
            )}

            {personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>{personalInfo.phone}</span>
              </div>
            )}

            {personalInfo.address && (
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{personalInfo.address}</span>
              </div>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        {summary.content && (
          <div className="space-y-2 p-4 rounded-md" style={{ backgroundColor: `${theme.secondary}10` }}>
            <h2 className="text-lg font-semibold flex items-center gap-2" style={{ color: theme.secondary }}>
              <Award className="h-4 w-4" />
              Professional Summary
            </h2>
            <p className="text-sm">{summary.content}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Experience */}
            {experience.length > 0 && (
              <div className="space-y-4">
                <h2
                  className="text-lg font-semibold flex items-center gap-2 pb-2 border-b"
                  style={{ borderColor: theme.accent }}
                >
                  <Briefcase className="h-4 w-4" style={{ color: theme.accent }} />
                  Work Experience
                </h2>

                {experience.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{exp.position}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <div className="text-sm font-medium" style={{ color: theme.secondary }}>
                      {exp.company}, {exp.location}
                    </div>
                    {exp.description && <p className="text-sm mt-1">{exp.description}</p>}
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {projects.length > 0 && (
              <div className="space-y-4">
                <h2
                  className="text-lg font-semibold flex items-center gap-2 pb-2 border-b"
                  style={{ borderColor: theme.accent }}
                >
                  <Code className="h-4 w-4" style={{ color: theme.accent }} />
                  Projects
                </h2>

                {projects.map((project) => (
                  <div key={project.id} className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{project.title}</h3>
                      {(project.startDate || project.endDate) && (
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {project.startDate} - {project.endDate}
                        </span>
                      )}
                    </div>
                    <p className="text-sm">{project.description}</p>
                    {project.technologies && (
                      <p className="text-sm">
                        <span className="font-medium">Technologies:</span> {project.technologies}
                      </p>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs flex items-center gap-1 hover:underline"
                        style={{ color: theme.accent }}
                      >
                        <Globe className="h-3 w-3" />
                        Project Link
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div className="space-y-4">
                <h2
                  className="text-lg font-semibold flex items-center gap-2 pb-2 border-b"
                  style={{ borderColor: theme.accent }}
                >
                  <GraduationCap className="h-4 w-4" style={{ color: theme.accent }} />
                  Education
                </h2>

                {education.map((edu) => (
                  <div key={edu.id} className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{edu.institution}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <div className="text-sm" style={{ color: theme.secondary }}>
                      {edu.degree} in {edu.fieldOfStudy}
                    </div>
                    {edu.description && <p className="text-sm">{edu.description}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* Skills */}
            {skills.length > 0 && (
              <div className="space-y-3 p-4 rounded-md" style={{ backgroundColor: `${theme.secondary}10` }}>
                <h2 className="text-lg font-semibold flex items-center gap-2" style={{ color: theme.secondary }}>
                  <Award className="h-4 w-4" />
                  Skills
                </h2>

                <div className="space-y-2">
                  {skills.map((skill) => (
                    <div key={skill.id} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{getLevelText(skill.level)}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full overflow-hidden bg-gray-200">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(skill.level / 5) * 100}%`,
                            backgroundColor: theme.accent,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {languages.length > 0 && (
              <div className="space-y-3 p-4 rounded-md" style={{ backgroundColor: `${theme.secondary}10` }}>
                <h2 className="text-lg font-semibold flex items-center gap-2" style={{ color: theme.secondary }}>
                  <Languages className="h-4 w-4" />
                  Languages
                </h2>

                <div className="space-y-2">
                  {languages.map((language) => (
                    <div key={language.id} className="flex justify-between items-center">
                      <span className="text-sm font-medium">{language.name}</span>
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: theme.accent,
                          color: "white",
                        }}
                      >
                        {language.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hobbies */}
            {hobbies.length > 0 && (
              <div className="space-y-3 p-4 rounded-md" style={{ backgroundColor: `${theme.secondary}10` }}>
                <h2 className="text-lg font-semibold flex items-center gap-2" style={{ color: theme.secondary }}>
                  <Heart className="h-4 w-4" />
                  Hobbies & Interests
                </h2>

                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby) => (
                    <span
                      key={hobby.id}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: `${theme.accent}20`,
                        color: theme.accent,
                      }}
                    >
                      {hobby.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
