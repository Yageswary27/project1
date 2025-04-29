import * as React from "react"
import { cn } from "../../lib/utils"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    onValueChange?: (value: string) => void;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
))
Select.displayName = "Select"
const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-between w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  })
  SelectTrigger.displayName = "SelectTrigger"
  
  const SelectValue = ({ placeholder }: { placeholder?: string }) => {
    return (
      <span className="text-muted-foreground">{placeholder}</span>
    )
  }
  
  const SelectContent = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="absolute z-50 mt-1 w-full rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md">
        {children}
      </div>
    )
  }
  
  const SelectItem = ({ children, value }: { children: React.ReactNode; value: string }) => {
    return (
      <option value={value} className="cursor-pointer p-2 hover:bg-accent">
        {children}
      </option>
    )
  }
  
  export {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
  }
  
