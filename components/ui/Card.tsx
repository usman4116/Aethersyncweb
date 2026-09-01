import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "flat" | "elevated" | "glass"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "flat", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border text-foreground",
          {
            "bg-surface border-border": variant === "flat",
            "bg-surface-elevated border-border shadow-md": variant === "elevated",
            "bg-surface-elevated border-border shadow-lg": variant === "glass",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card }
