import React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false,
  ...props 
}, ref) => {
  const Comp = asChild ? React.Fragment : "button"
  
  // Button style variants
  const variantStyles = {
    default: "bg-blue-600 text-white shadow hover:bg-blue-700",
    destructive: "bg-red-600 text-white shadow-sm hover:bg-red-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-900",
    secondary: "bg-gray-200 text-gray-900 shadow-sm hover:bg-gray-300",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
    link: "text-blue-600 underline-offset-4 hover:underline",
    apple: "px-6 py-3 rounded-full bg-blue-600 text-white font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600",
  }
  
  // Button size variants
  const sizeStyles = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  }
  
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button } 