import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import type {
  PersonalInfo,
  Education,
  Experience,
  Skill,
  Hobby,
  Language,
  Project,
  Summary,
} from "../app/page"

interface GeneratePDFProps {
  personalInfo: PersonalInfo
  education: Education[]
  experience: Experience[]
  skills: Skill[]
  hobbies: Hobby[]
  languages: Language[]
  projects: Project[]
  summary: Summary
}

export async function generatePDF({
  personalInfo,
}: GeneratePDFProps) {
  const element = document.getElementById("cv-preview")

  if (!element) {
    console.error("CV Preview element not found.")
    return
  }

  try {
    // Capture the entire CV preview as canvas
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff", // white background
    })

    const imgData = canvas.toDataURL("image/png")

    // PDF size: A4 210mm x 297mm
    const pdf = new jsPDF("p", "mm", "a4")
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()

    // Canvas dimensions
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height
    const ratio = pageWidth / canvasWidth
    const imgHeight = canvasHeight * ratio

    let position = 0

    // If content fits in one page
    if (imgHeight <= pageHeight) {
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight)
    } else {
      // Handle multi-page
      let remainingHeight = imgHeight

      while (remainingHeight > 0) {
        pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight)
        remainingHeight -= pageHeight
        position -= pageHeight
        if (remainingHeight > 0) {
          pdf.addPage()
        }
      }
    }

    const fileName = `${personalInfo.fullName?.replace(/\s+/g, "_") || "my"}_CV.pdf`
    pdf.save(fileName)
  } catch (err) {
    console.error("Failed to generate PDF:", err)
  }
}
