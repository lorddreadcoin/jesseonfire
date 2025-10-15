"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-gradient-to-r from-orange-600 to-red-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 active:scale-100",
      secondary: "border-2 border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-100",
      ghost: "bg-transparent text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 active:bg-orange-500/20"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        disabled={disabled}
        aria-label={typeof children === "string" ? children : undefined}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
