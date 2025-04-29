// src/components/ui/dialog.tsx

import * as React from "react"

interface DialogProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Dialog = ({ open, onClose, children }: DialogProps) => {
  const dialogRef = React.useRef<HTMLDivElement | null>(null)

  // Focus the first interactive element inside the dialog
  React.useEffect(() => {
    if (open && dialogRef.current) {
      const firstFocusable = dialogRef.current.querySelector(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      ) as HTMLElement
      firstFocusable?.focus()
    }
  }, [open])

  // Prevent body scroll when open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-hidden={!open}
      aria-labelledby="dialog-title"
    >
      <div
        ref={dialogRef}
        className="bg-white dark:bg-zinc-900 p-6 rounded-md shadow-lg relative"
        role="document"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          aria-label="Close Dialog"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

// ✅ Additional Components Below:

export const DialogContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={`w-full ${className}`}>{children}</div>
}

export const DialogHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-4">{children}</div>
}

export const DialogTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 id="dialog-title" className="text-lg font-semibold">{children}</h2>
}
