"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { useTheme, themes, type ThemeColor } from "./theme-context"
import { Check } from "lucide-react"

export function ThemeSelector() {
  const { theme, setTheme, themeOpen, setThemeOpen } = useTheme()

  return (
    <Dialog open={themeOpen} onClose={() => setThemeOpen(false)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choose a theme</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {themes.map((t) => (
            <ThemeCard key={t.name} themeColor={t} isSelected={theme.name === t.name} onClick={() => setTheme(t)} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function ThemeCard({
  themeColor,
  isSelected,
  onClick,
}: {
  themeColor: ThemeColor
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <div
      className={`relative cursor-pointer rounded-lg p-2 transition-all hover:scale-105 ${
        isSelected ? "ring-2 ring-accent" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col gap-2">
        <div className="h-20 rounded-md" style={{ backgroundColor: themeColor.primary }}>
          <div className="h-1/2 rounded-t-md" style={{ backgroundColor: themeColor.accent }}></div>
        </div>
        <div className="text-sm font-medium">{themeColor.name}</div>
      </div>
      {isSelected && (
        <div className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white">
          <Check className="h-3 w-3" />
        </div>
      )}
    </div>
  )
}
