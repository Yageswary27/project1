import * as React from "react"
import { cn } from "../../lib/utils"

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
}

function Tabs({ value, onValueChange, children, className }: TabsProps) {
  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { value, onValueChange }) : child
      )}
    </div>
  )
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}
function TabsList({ className, ...props }: TabsListProps) {
  return (
    <div className={cn("flex", className)} {...props} />
  )
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}
function TabsTrigger({ className, value, ...props }: TabsTriggerProps) {
  return (
    <button className={cn("flex-1 p-2 text-center", className)} {...props}>
      {props.children}
    </button>
  )
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}
function TabsContent({ className, value, ...props }: TabsContentProps) {
  return (
    <div className={cn("p-2", className)} {...props}>
      {props.children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
