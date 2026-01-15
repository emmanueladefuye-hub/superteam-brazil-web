import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 group relative overflow-hidden",
  {
    variants: {
      variant: {
        primary: "bg-superteam-purple hover:bg-superteam-purple-dark text-white glow-purple",
        secondary: "bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm",
        outline: "border-2 border-superteam-purple/50 text-white hover:border-superteam-purple hover:bg-superteam-purple/10",
        ghost: "hover:bg-white/5 text-white/70 hover:text-white",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  showShine?: boolean
}

export function Button({ className, variant, size, showShine = true, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {showShine && variant === 'primary' && (
        <span className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:animate-[shine_0.75s_ease-in-out]" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}