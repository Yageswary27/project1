"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type ThemeColor = {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
}

export const themes: ThemeColor[] = [
  {
    name: "Default",
    primary: "#0f172a",
    secondary: "#334155",
    accent: "#3b82f6",
    background: "#ffffff",
    text: "#0f172a",
  },
  {
    name: "Professional",
    primary: "#1e293b",
    secondary: "#475569",
    accent: "#0ea5e9",
    background: "#f8fafc",
    text: "#1e293b",
  },
  {
    name: "Creative",
    primary: "#4c1d95",
    secondary: "#7e22ce",
    accent: "#c026d3",
    background: "#faf5ff",
    text: "#4a044e",
  },
  {
    name: "Modern",
    primary: "#0f766e",
    secondary: "#0d9488",
    accent: "#14b8a6",
    background: "#f0fdfa",
    text: "#134e4a",
  },
  {
    name: "Elegant",
    primary: "#7f1d1d",
    secondary: "#b91c1c",
    accent: "#ef4444",
    background: "#fef2f2",
    text: "#7f1d1d",
  },
  {
    name: "Minimal",
    primary: "#18181b",
    secondary: "#3f3f46",
    accent: "#71717a",
    background: "#fafafa",
    text: "#18181b",
  },
]

type ThemeContextType = {
  theme: ThemeColor
  setTheme: (theme: ThemeColor) => void
  themeOpen: boolean
  setThemeOpen: (open: boolean) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themes[0],
  setTheme: () => {},
  themeOpen: false,
  setThemeOpen: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeColor>(themes[0])
  const [themeOpen, setThemeOpen] = useState(false)

  // Apply theme to document
  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", theme.primary)
    document.documentElement.style.setProperty("--color-secondary", theme.secondary)
    document.documentElement.style.setProperty("--color-accent", theme.accent)
    document.documentElement.style.setProperty("--color-background", theme.background)
    document.documentElement.style.setProperty("--color-text", theme.text)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme, themeOpen, setThemeOpen }}>{children}</ThemeContext.Provider>
}
