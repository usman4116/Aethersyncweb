import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background group relative overflow-hidden",
          {
            // Primary: Vibrant gradient with inner glow and outer drop shadow
            "bg-gradient-to-b from-primary to-primary/80 text-white shadow-[0_0_20px_rgba(255,102,0,0.3)] hover:shadow-[0_0_30px_rgba(255,102,0,0.5)] border border-primary/50 hover:brightness-110 active:scale-95": variant === "primary",
            
            // Secondary: Subtle gradient
            "bg-secondary text-white hover:bg-secondary/90 shadow-sm": variant === "secondary",
            
            // Outline: Glowing border effect on hover
            "border border-border bg-surface text-foreground hover:border-primary/50 hover:bg-surface-elevated hover:shadow-[0_0_15px_rgba(255,102,0,0.15)]": variant === "outline",
            
            // Ghost: Simple background fade
            "hover:bg-surface-elevated text-foreground": variant === "ghost",
            
            // Glass: Frosted glass effect
            "bg-surface/50 backdrop-blur-md border border-border hover:bg-surface text-foreground shadow-sm hover:border-primary/30": variant === "glass",
            
            // Sizes
            "h-9 px-4 rounded-lg": size === "sm",
            "h-11 py-2 px-6 rounded-xl": size === "md",
            "h-14 px-8 rounded-2xl text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {/* Subtle shine effect that sweeps across the button on hover for primary variant */}
        {variant === 'primary' && (
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        )}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {props.children}
        </span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
